import CartItem from './CartItem';
import styles from './Cart.module.css';
import { useState, useEffect } from 'react';
import { approvePayment } from '@api/payment';
import OrderModal from '@modals/OrderModal';
import PaymentModal from '@modals/PaymentModal';
import PreOrderNoticeModal from '@modals/PreOrderNoticeModal';
import PhoneInputModal from '@modals/PhoneInputModal';
import ReturnWarningModal from '@modals/WarningModal';
import PaymentCompleteModal from '@modals/PaymentCompleteModal';
import FailModal from '@modals/FailModal';

export default function Cart({ items, onRemove, onIncrease, onDecrease }) {
  const [showNotice, setShowNotice] = useState(false); // 1) 안내사항
  const [showOrder, setShowOrder] = useState(false); // 2) 주문 내역
  const [showPhone, setShowPhone] = useState(false); // 3) 전화번호 입력
  const [showReturnWarning, setShowReturnWarning] = useState(false); // 3-1) 제작 후 반품 불가 안내
  const [showPayment, setShowPayment] = useState(false); // 4) 결제 안내
  const [showComplete, setShowComplete] = useState(false); // 5) 결제 완료
  const [showTimeout, setShowTimeout] = useState(false); // 6) 시간 초과
  const [phone, setPhone] = useState(null);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    if (showPayment) {
      approvePayment({ amount: totalPrice, tax: 0, svc: 0, inst: '00', noSign: true })
        .then((res) => {
          console.log('결제 승인 응답:', res);
        })
        .catch((err) => {
          console.error('결제 승인 오류:', err);
        });
    }
  }, [showPayment, totalPrice]);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.itemsBoxContainer}>
            <div className={styles.itemsBox}>
              {items.map((item) => (
                <CartItem
                  key={item.name}
                  item={item}
                  onRemove={() => onRemove(item.name)}
                  onIncrease={() => onIncrease(item.name)}
                  onDecrease={() => onDecrease(item.name)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.summaryTitle}>
            선택한 상품 <span className={styles.red}>{items.reduce((sum, item) => sum + item.quantity, 0)}개</span>
          </div>

          <div className={styles.totalLabel}>총 결제 금액</div>

          <div className={styles.totalPrice}>{totalPrice.toLocaleString()}원</div>

          <button
            className={styles.payButton}
            onClick={() => setShowNotice(true)}
            disabled={items.length === 0}
            style={items.length === 0 ? { backgroundColor: '#d1d5dc', cursor: 'not-allowed' } : {}}
          >
            결제하기
          </button>
        </div>
      </div>

      {showNotice && (
        <PreOrderNoticeModal
          onClose={() => setShowNotice(false)}
          onNext={() => {
            setShowNotice(false);
            setShowOrder(true);
          }}
        />
      )}

      {showOrder && (
        <OrderModal
          items={items}
          onBack={() => {
            setShowOrder(false);
            setShowNotice(true);
          }}
          onProceed={() => {
            setShowOrder(false);
            setShowPhone(true);
          }}
        />
      )}

      {showPhone && (
        <PhoneInputModal
          onBack={() => {
            setShowPhone(false);
            setShowOrder(true);
          }}
          onNext={(formattedPhone) => {
            setPhone(formattedPhone);
            setShowReturnWarning(true);
          }}
        />
      )}

      {showReturnWarning && (
        <ReturnWarningModal
          formattedPhone={phone}
          onBack={() => {
            setShowReturnWarning(false);
          }}
          onCancel={() => {
            setShowReturnWarning(false);
          }}
          onConfirm={() => {
            setShowReturnWarning(false);
            setShowPhone(false);
            setShowPayment(true);
          }}
        />
      )}

      {showPayment && (
        <PaymentModal
          items={items}
          onBack={() => {
            setShowPayment(false);
            setShowPhone(true);
          }}
          onTimeout={() => {
            setShowPayment(false);
            setShowTimeout(true);
          }}
          onComplete={() => {
            setShowPayment(false);
            setShowComplete(true);
          }}
        />
      )}

      {showComplete && <PaymentCompleteModal onClose={() => setShowComplete(false)} />}
      {showTimeout && (
        <FailModal
          type='timeout'
          amount={totalPrice}
          onClose={() => setShowTimeout(false)}
          onRetry={() => {
            setShowTimeout(false);
            setShowPayment(true);
          }}
        />
      )}
    </>
  );
}
