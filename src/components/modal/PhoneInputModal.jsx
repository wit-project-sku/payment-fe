import { useState } from 'react';
import Modal from '@commons/Modal';
import styles from './PhoneInputModal.module.css';
import { useUserStore } from '@hooks/useUserStore';
import leftArrow from '@assets/images/leftArrow.png';

export default function PhoneInputModal({ onBack, onNext }) {
  const [phone, setPhone] = useState('');
  const digits = phone.replace(/[^0-9]/g, '');

  let formattedPhone = digits;
  if (digits.length > 3) {
    formattedPhone = digits.slice(0, 3) + '-' + digits.slice(3);
  }
  if (digits.length > 7) {
    formattedPhone = digits.slice(0, 3) + '-' + digits.slice(3, 7) + '-' + digits.slice(7);
  }

  const handleKeyPress = (value) => {
    if (value === 'DEL') {
      setPhone((prev) => prev.slice(0, -1));
      return;
    }

    if (phone.length >= 11) return;
    setPhone((prev) => prev + value);
  };

  const handleSubmit = () => {
    if (phone.length < 10) {
      alert('전화번호를 정확히 입력해주세요.');
      return;
    }
    useUserStore.getState().setPhone(formattedPhone);
    onNext(formattedPhone);
  };

  return (
    <Modal onBack={onBack}>
      <div className={styles.container}>
        <div className={styles.backButton} onClick={onBack}>
          <img src={leftArrow} alt='back' className={styles.backIcon} />
        </div>
        <h2 className={styles.title}>상품 수령을 위한 정보를 입력해주세요.</h2>

        <p className={styles.subText}>상품 주문 위한 바코드가 해당 번호로 전송됩니다.</p>
        <p className={styles.errorGuide}>오류 문의: 010-8792-2028</p>

        <input
          className={styles.phoneInput}
          type='text'
          placeholder='전화번호를 입력해주세요.'
          value={formattedPhone}
          readOnly
        />

        <div className={styles.keypad}>
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num) => (
            <button key={num} className={styles.key} onClick={() => handleKeyPress(num)}>
              {num}
            </button>
          ))}

          <button className={`${styles.key} ${styles.delete}`} onClick={() => setPhone('')}>
            ⌫
          </button>

          <button className={`${styles.key} ${styles.key}`} onClick={() => handleKeyPress('0')}>
            0
          </button>

          <button className={`${styles.key} ${styles.delete}`} onClick={() => handleKeyPress('DEL')}>
            <img src={leftArrow} alt='back' className={styles.backIcon} />
          </button>
        </div>

        <button className={styles.confirmBtn} onClick={handleSubmit} disabled={digits.length !== 11}>
          확인
        </button>
      </div>
    </Modal>
  );
}
