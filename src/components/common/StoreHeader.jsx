import styles from './StoreSubHeader.module.css';

export default function StoreSubHeader({ active, onChange }) {
  const categories = [
    { key: 'phone', label: '📱 폰케이스' },
    { key: 'mug', label: '🍵 머그컵' },
    { key: 'keyring', label: '🔑 키링' },
  ];

  return (
    <div className={styles.container}>
      {categories.map((cat, index) => (
        <div
          key={cat.key}
          className={`${styles.item} ${active === cat.key ? styles.active : ''}`}
          onClick={() => onChange(cat.key)}
        >
          {cat.label}

          {/* 구분선 (마지막 항목 제외) */}
          {index !== categories.length - 1 && <div className={styles.divider}></div>}
        </div>
      ))}
    </div>
  );
}
