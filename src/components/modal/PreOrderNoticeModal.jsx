import Modal from '@commons/Modal';
import styles from './PreOrderNoticeModal.module.css';
import warn from '@assets/images/warn.png';

export default function PreOrderNoticeModal({ onClose, onNext }) {
  return (
    <Modal onClose={onClose}>
      <img src={warn} alt='주의 아이콘' className={styles.iconImage} />
      <h2 className={styles.title}>주문 전 안내사항</h2>
      <div className={styles.noticeBox}>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            <span className={styles.iconMobile}>📱</span> 모바일 기기 필수
          </div>
          <p className={styles.sectionDesc}>
            결제 후 휴대폰으로 문자가 발송됩니다. 문자 링크를 통해 배송지 정보와 폰케이스 기종을 입력하셔야 합니다.
          </p>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            <span className={styles.iconTruck}>🚚</span> 배송 안내
          </div>
          <p className={styles.sectionDesc}>주문 후 3~5일 이내 배송됩니다. 배송지 정보를 정확히 입력해주세요.</p>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            <span className={styles.iconWarn}>❗</span> 반품 불가 안내
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
