import Modal from '@commons/Modal';
import styles from './PreOrderNoticeModal.module.css';
import warnImg from '@assets/images/warn.png';
import phoneImg from '@assets/images/phone.png';
import orangeBoxImg from '@assets/images/orangeBox.png';
import guardImg from '@assets/images/guard.png';

export default function PreOrderNoticeModal({ onClose, onNext }) {
  return (
    <Modal onClose={onClose}>
      <img src={warnImg} alt='주의 아이콘' className={styles.iconImage} />
      <h2 className={styles.title}>주문 전 안내사항</h2>
      <div className={styles.noticeBox}>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            <img src={phoneImg} alt='핸드폰 아이콘' className={styles.icon} /> 모바일 기기 필수
          </div>
          <p className={styles.sectionDesc}>
            결제 후 휴대폰으로 문자가 발송됩니다. 문자 링크를 통해 배송지 정보와 폰케이스 기종을 입력하셔야 합니다.
          </p>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            <img src={orangeBoxImg} alt='배송 아이콘' className={styles.icon} /> 배송 안내
          </div>
          <p className={styles.sectionDesc}>
            주문 후 3-5일 이내 배송됩니다. 배송지 정보를 정확히 입력해주세요. (배송비 3천원으로 별도로 부과됩니다.){' '}
          </p>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            <img src={guardImg} alt='방패 아이콘' className={styles.icon} /> 반품 불가 안내
          </div>
          <p className={styles.sectionDesc}>
            개인 맞춤 제작 상품으로 제작 후 <b className={styles.red}>반품이 불가</b>합니다. 단, 불량품의 경우 교환 또는
            환불 가능합니다.
          </p>
        </div>
      </div>

      <div className={styles.confirmBox}>
        <p className={styles.confirmText}>위 내용을 확인하셨나요?</p>
      </div>

      <div className={styles.buttons}>
        <button className={`${styles.buttonBase} ${styles.cancelBtn}`} onClick={onClose}>
          취소
        </button>
        <button className={`${styles.buttonBase} ${styles.confirmBtn}`} onClick={onNext}>
          확인했습니다
        </button>
      </div>
    </Modal>
  );
}
