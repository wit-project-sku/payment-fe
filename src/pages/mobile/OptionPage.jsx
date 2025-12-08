import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './OptionPage.module.css';
import caseImg from '@/assets/images/case.png';
import mugImg from '@/assets/images/mug.jpg';

export default function OptionPage() {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const items = [
    {
      id: 1,
      name: 'WITH > AR캡날 자개 문양 폰케이스',
      qty: 1,
      image: caseImg,
      options: ['iPhone 14', 'iPhone 15 Pro Max', 'Galaxy S23'],
    },
    {
      id: 2,
      name: 'WITH > AR합성 머그컵',
      qty: 1,
      image: mugImg,
      options: null,
    },
  ];

  const isNextEnabled = Boolean(selectedOption);

  const handleNext = () => {
    if (!isNextEnabled) return;
    navigate('/mobile/address');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>주문 내역</h1>
      <p className={styles.subtitle}>아래의 주문 내역을 확인해주세요</p>

      {items.map((item) => (
        <div className={styles.card} key={item.id}>
          <div className={styles.row}>
            <img src={item.image} alt={item.name} className={styles.thumbnail} />
            <div className={styles.info}>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.qty}>수량: {item.qty}개</div>
            </div>
          </div>

          {item.options && (
            <select
              className={styles.select}
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value=''>기종을 선택하세요</option>
              {item.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          )}
        </div>
      ))}

      <button
        className={`${styles.nextButton} ${isNextEnabled ? styles.active : ''}`}
        disabled={!isNextEnabled}
        onClick={handleNext}
      >
        다음
      </button>
    </div>
  );
}
