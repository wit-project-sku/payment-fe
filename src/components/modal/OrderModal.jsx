import styles from './OrderModal.module.css';

export default function OrderModal({ items, onClose, onProceed }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <h2 className={styles.modalTitle}>주문 내역</h2>

        <div className={styles.modalItems}>
          {items.map((item) => (
            <div className={styles.modalRow} key={item.name}>
              <span>{item.name}</span>
              <span>{item.quantity}개</span>
              <span>{(item.price * item.quantity).toLocaleString()}원</span>
            </div>
          ))}
        </div>

        <div className={styles.modalSummary}>
          <div>
            총 수량 <span>{items.reduce((sum, i) => sum + i.quantity, 0)}</span>개
          </div>
          <div>
            총 결제 금액 <span>{items.reduce((sum, i) => sum + i.quantity * i.price, 0).toLocaleString()}</span>원
          </div>
        </div>

        <div className={styles.modalButtons}>
          <button className={styles.modalBack} onClick={onClose}>
            돌아가기
          </button>
          <button className={styles.modalPay} onClick={onProceed}>
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
}
