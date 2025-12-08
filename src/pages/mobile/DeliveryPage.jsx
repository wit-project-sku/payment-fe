import { useNavigate } from 'react-router-dom';
import styles from './DeliveryPage.module.css';
import leftArrow from '@assets/images/leftArrow.png';

export default function DeliveryPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <img src={leftArrow} alt='back' className={styles.backButton} onClick={() => navigate(-1)} />

      <h1 className={styles.title}>주문 내역</h1>
      <p className={styles.subtitle}>휴대폰 번호 : 010-0000-0000</p>

      {/* 첫 번째 주문 카드 */}
      <div className={styles.card}>
        <div className={styles.rowBetween}>
          <div className={styles.orderInfo}>
            <div className={styles.orderNumber}>주문번호: ORD-2025-001</div>
            <div className={styles.orderDate}>2025-11-15</div>
          </div>
          <div className={`${styles.status} ${styles.shipping}`}>배송 중</div>
        </div>

        <div className={styles.itemRow}>
          WITH &gt; AR캡날 녹색투명 폰케이스 x 1<span className={styles.price}>34,900원</span>
        </div>

        <div className={styles.itemRow}>
          WITH &gt; AR캡날 머그컵 x 2<span className={styles.price}>49,800원</span>
        </div>

        <div className={styles.itemRow}>
          배송비
          <span className={styles.price}>+3,000원</span>
        </div>

        <div className={styles.totalRow}>
          총 결제금액
          <span className={styles.totalPrice}>84,700원</span>
        </div>

        <div className={styles.trackingBox}>
          <div className={styles.trackingLabel}>송장번호</div>
          <div className={styles.trackingNumber}>123456789012</div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.rowBetween}>
          <div className={styles.orderInfo}>
            <div className={styles.orderNumber}>주문번호: ORD-2025-002</div>
            <div className={styles.orderDate}>2025-11-10</div>
          </div>
          <div className={`${styles.status} ${styles.complete}`}>주문 완료</div>
        </div>

        <div className={styles.itemRow}>
          WITH &gt; AR캡날 아크릴 키링 x 1<span className={styles.price}>14,900원</span>
        </div>

        <div className={styles.itemRow}>
          배송비
          <span className={styles.price}>+3,000원</span>
        </div>

        <div className={styles.totalRow}>
          총 결제금액
          <span className={styles.totalPrice}>17,900원</span>
        </div>
      </div>
    </div>
  );
}
