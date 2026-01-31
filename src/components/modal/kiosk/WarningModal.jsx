import styles from './WarningModal.module.css';
import warnImg from '@assets/images/warn.png';

export default function WarningModal({ title, subtitle, description, formattedPhone, onConfirm, onCancel }) {
  return (
    <div className={styles.overlay} onClick={onCancel}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <img src={warnImg} className={styles.icon} />

        <div className={styles.title}>{title || '입력하신 전화번호가 맞으신가요?'}</div>

        {subtitle && <div className={styles.subtitle}>{subtitle}</div>}

        {description && <div className={styles.description}>{description}</div>}

        {formattedPhone && <div className={styles.phone}>{formattedPhone}</div>}

        <div className={styles.buttonRow}>
          <button className={styles.cancelButton} onClick={onCancel}>
            취소
          </button>
          <button className={styles.button} onClick={onConfirm}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
