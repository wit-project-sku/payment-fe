import styles from './Header.module.css';

export default function Header({ activeTab, setActiveTab }) {
  const tabs = ['WITH Goods', 'Custom Goods', 'Collabo Goods'];

  return (
    <div className={styles.header}>
      <button
        className={styles.arrowLeft}
        onClick={() => setActiveTab((prev) => (prev === 0 ? tabs.length - 1 : prev - 1))}
      >
        ‹
      </button>

      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${styles.tab} ${activeTab === index ? styles.active : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      <button
        className={styles.arrowRight}
        onClick={() => setActiveTab((prev) => (prev === tabs.length - 1 ? 0 : prev + 1))}
      >
        ›
      </button>
    </div>
  );
}
