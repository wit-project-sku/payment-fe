import styles from './PaymentModal.module.css';

export default function PaymentModal({ items, onClose }) {
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.paymentScreen}>
        <h2 className={styles.paymentTitle}>카드를 넣어주세요.</h2>

        <p className={styles.paymentSubtitle}>기기 하단에 있는 카드 리더기에 신용카드를 넣어주세요.</p>

        <div className={styles.paymentAmount}>결제 금액: {totalPrice.toLocaleString()}원</div>

        <div className={styles.paymentImage}></div>

        <div className={styles.paymentBar}>
          <div className={styles.paymentBarFill}></div>
        </div>

        <button className={styles.paymentCancel} onClick={onClose}>
          취소
        </button>
      </div>
    </div>
  );
}
