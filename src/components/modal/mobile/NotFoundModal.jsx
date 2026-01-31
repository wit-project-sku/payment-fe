import styles from './NotFoundModal.module.css';
import warnImg from '@assets/images/warn.png';

export default function NotFoundModal({ onClose }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <img src={warnImg} className={styles.icon} alt='warn' />

        <p className={styles.message}>주문내역이 존재하지 않습니다</p>

        <button className={styles.closeButton} onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
}
