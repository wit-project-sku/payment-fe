import { useNavigate } from 'react-router-dom';
import styles from './MobileMainPage.module.css';
import noticeImg from '@assets/images/notice.png';
import pencilImg from '@assets/images/pencil.png';
import paperImg from '@assets/images/paper.png';
import refundImg from '@assets/images/refund.png';

export default function MobileMainPage() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/mobile/search?type=order');
  };

  const handleDeliveryClick = () => {
    navigate('/mobile/search?type=delivery');
  };

  const handleRefundClick = () => {
    navigate('/mobile/refund');
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.mainContainer}>
        <header className={styles.headerArea}>
          <h1 className={styles.title}>WIT Store</h1>
          <p className={styles.subtitle}>원하시는 서비스를 선택해주세요</p>
        </header>

        <button className={`${styles.mainButton} ${styles.orderButton}`} onClick={handleOrderClick}>
          <div className={styles.buttonIconCircle}>
            <img src={pencilImg} alt='pencil' className={styles.buttonIcon} />
          </div>
          <div className={styles.buttonTextArea}>
            <div className={styles.buttonTitle}>주문 정보 입력</div>
            <div className={styles.buttonDesc}>배송 정보를 입력해주세요.</div>
          </div>
        </button>

        <button className={`${styles.mainButton} ${styles.deliveryButton}`} onClick={handleDeliveryClick}>
          <div className={styles.buttonIconCircle}>
            <img src={paperImg} alt='paper' className={styles.buttonIcon} />
          </div>
          <div className={styles.buttonTextArea}>
            <div className={styles.buttonTitle}>주문 조회</div>
            <div className={styles.buttonDesc}>주문 내역을 확인해주세요.</div>
          </div>
        </button>

        <button className={`${styles.mainButton} ${styles.refundButton}`} onClick={handleRefundClick}>
          <div className={styles.buttonIconCircle}>
            <img src={refundImg} alt='refund' className={styles.buttonIcon} />
          </div>
          <div className={styles.buttonTextArea}>
            <div className={styles.buttonTitle}>환불/교환 신청</div>
            <div className={styles.buttonDesc}>불량품 교환 및 환불</div>
          </div>
        </button>

        <section className={styles.noticeBox}>
          <div className={styles.noticeHeader}>
            <img src={noticeImg} alt='notice' className={styles.noticeIcon} />
            <span className={styles.noticeTitle}>안내</span>
          </div>
          <p className={styles.noticeText}>
            본 제품은 개인화 맞춤 제작 상품으로 제작 완료 후 단순 변심에 의한 반품은 불가능합니다. 불량품의 경우에만
            교환/환불이 가능합니다.
          </p>
        </section>
      </div>
    </div>
  );
}
