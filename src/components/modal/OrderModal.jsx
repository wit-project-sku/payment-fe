import styles from './OrderModal.module.css';
import Modal from '@commons/Modal';

export default function OrderModal({ items, onBack, onProceed }) {
  return (
    <Modal onClose={onBack}>
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

      <div className={styles.summaryTopLine}></div>
      <div className={styles.modalSummary}>
        <div className={styles.summaryRow}>
          <span>총 상품금액</span>
          <span>{items.reduce((sum, i) => sum + i.quantity * i.price, 0).toLocaleString()}원</span>
        </div>

        <div className={styles.summaryRow}>
          <span>배송비</span>
          <span>+3,000원</span>
        </div>

        <div className={styles.summaryDivider}></div>

        <div className={styles.summaryTotal}>
          <span>총 결제 금액</span>
          <span>{(items.reduce((sum, i) => sum + i.quantity * i.price, 0) + 3000).toLocaleString()}원</span>
        </div>
      </div>

      <div className={styles.modalButtons}>
        <button className={styles.modalBack} onClick={onBack}>
          돌아가기
        </button>
        <button className={styles.modalPay} onClick={onProceed}>
          결제하기
        </button>
      </div>
    </Modal>
  );
}
