import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchPage.module.css';
import phoneIcon from '@assets/images/warn.png';

export default function SearchPage() {
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();

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
      <h1 className={styles.title}>주문 조회</h1>
      <p className={styles.subtitle}>결제 시 입력한 전화번호를 입력해주세요</p>

      <div className={styles.inputWrapper}>
        <img src={phoneIcon} alt='phone' className={styles.icon} />
        <input
          type='tel'
          placeholder='010-1234-5678'
          className={styles.input}
          value={formatPhone(phone)}
          onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
          maxLength={13}
        />
      </div>

      <div className={styles.noticeBox}>
        <span className={styles.noticeTitle}>안내</span>
        <span className={styles.noticeText}>
          결제 시 입력하신 전화번호를 입력하시면 주문 내역을 확인하실 수 있습니다.
        </span>
      </div>

      <button
        className={`${styles.nextButton} ${isValid ? styles.active : ''}`}
        disabled={!isValid}
        onClick={() => isValid && navigate('/mobile/order')}
      >
        다음
      </button>
    </div>
  );
}
