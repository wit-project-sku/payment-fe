import Modal from '@commons/KioskModal';
import styles from './FailModal.module.css';
import clockImg from '@assets/images/clock.png';
import warnImg from '@assets/images/warn.png';
import failImg from '@assets/images/warn.png';

export default function FailModal({ type, amount, onClose, onRetry }) {
  const config = {
    lack: {
      title: '잔액이 부족합니다.',
      desc: '카드 잔액 또는 한도가 부족하여 결제할 수 없습니다.',
      icon: failImg,
      buttonText: '취소',
      buttonAction: onClose,
    },
    timeout: {
      title: '시간이 초과되었습니다.',
      desc: '처음부터 다시 시도해 주세요.',
      icon: clockImg,
      buttonText: '다시 시도',
      buttonAction: onRetry,
    },
    network: {
      title: '통신 오류가 발생했습니다.',
      desc: '오류가 계속될 경우 010-8792-2028로 문의바랍니다.',
      icon: warnImg,
      buttonText: '다시 시도',
      buttonAction: onRetry,
    },
  };

  const { title, desc, icon, buttonText, buttonAction } = config[type];

  return (
    <Modal onClose={onClose}>
      <div className={styles.modalWrapper}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.desc}>{desc}</p>

        <div className={styles.amountBox}>
          <span className={styles.amountLabel}>결제 금액</span>
          <span className={styles.amountValue}>{amount.toLocaleString()}원</span>
        </div>

        <img src={icon} alt='icon' className={styles.icon} />

        <button className={styles.actionButton} onClick={buttonAction}>
          {buttonText}
        </button>
      </div>
    </Modal>
  );
}
