import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './SearchPage.module.css';
import leftArrow from '@assets/images/leftArrow.png';
import telImg from '@assets/images/tel.png';

export default function SearchPage() {
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const mode = searchParams.get('type'); // "order" or "delivery"

  function formatPhone(num) {
    if (!num) return '';
    const cleaned = num.replace(/\D/g, '');
    if (cleaned.length <= 3) return cleaned;
    if (cleaned.length <= 7) return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 7)}-${cleaned.slice(7, 11)}`;
  }

  const isValid = phone.length === 11;

  return (
    <div className={styles.container}>
      <img src={leftArrow} alt='back' className={styles.backButton} onClick={() => navigate(-1)} />
      <h1 className={styles.title}>{mode === 'order' ? '주문 정보 조회' : '주문 내역 조회'}</h1>
      <p className={styles.subtitle}>
        {mode === 'order'
          ? '결제 시 입력한 전화번호를 입력하시면 주문 정보를 확인할 수 있습니다.'
          : '결제 시 입력한 전화번호를 입력하시면 주문 내역을 확인할 수 있습니다.'}
      </p>

      <div className={styles.telLabelWrapper}>
        <img src={telImg} alt='tel' className={styles.telIcon} />
        <span className={styles.telLabel}>전화번호</span>
      </div>

      <div className={styles.inputWrapper}>
        <input
          type='tel'
          placeholder='전화번호를 입력해주세요'
          className={styles.input}
          value={formatPhone(phone)}
          onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
          maxLength={13}
        />
      </div>

      <div className={styles.noticeBox}>
        <div className={styles.noticeTitle}>안내</div>
        <div className={styles.noticeText}>
          결제 시 입력하신 전화번호를 입력하시면 주문 내역을 확인하실 수 있습니다.
        </div>
      </div>

      <button
        className={`${styles.nextButton} ${isValid ? styles.active : ''}`}
        disabled={!isValid}
        onClick={() => {
          if (!isValid) return;
          if (mode === 'order') navigate('/mobile/order');
          else if (mode === 'delivery') navigate('/mobile/delivery');
        }}
      >
        다음
      </button>
    </div>
  );
}
