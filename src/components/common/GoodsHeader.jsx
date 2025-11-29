import { useEffect, useState } from 'react';
import { getCategories } from '@api/categoryApi';
import styles from './GoodsHeader.module.css';

export default function GoodsHeader({ activeTab, setActiveTab, setCategories }) {
  const [tabs, setTabs] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const VISIBLE_COUNT = 3;

  useEffect(() => {
    getCategories()
      .then((res) => {
        if (res) {
          const names = res.map((c) => c.name);
          setTabs(names);
          setCategories(res);
        }
      })
      .catch((err) => console.error(err));
  }, [setCategories]);

  const handlePrevTab = () => {
    if (!tabs.length) return;
    if (activeTab === 0) return;

    setActiveTab((prev) => {
      const next = prev === 0 ? tabs.length - 1 : prev - 1;
      if (next < startIndex) {
        setStartIndex(next);
      }
      return next;
    });
  };

  const handleNextTab = () => {
    if (!tabs.length) return;
    if (activeTab === tabs.length - 1) return;

    setActiveTab((prev) => {
      const next = prev === tabs.length - 1 ? 0 : prev + 1;
      if (next >= startIndex + VISIBLE_COUNT) {
        setStartIndex(next - VISIBLE_COUNT + 1);
      }
      return next;
    });
  };

  const handleSelectTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div className={styles.goodsHeader}>
      <button
        type='button'
        className={styles.arrowLeft}
        onClick={handlePrevTab}
        aria-label='이전 탭'
        disabled={activeTab === 0}
      >
        ‹
      </button>

      <div className={styles.tabs} role='tablist' aria-label='상품 카테고리'>
        {tabs.slice(startIndex, startIndex + VISIBLE_COUNT).map((tab, offset) => {
          const index = startIndex + offset;
          const isActive = activeTab === index;

          return (
            <button
              key={index}
              type='button'
              role='tab'
              aria-selected={isActive}
              className={`${styles.tab} ${isActive ? styles.active : ''}`}
              onClick={() => handleSelectTab(index)}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <button
        type='button'
        className={styles.arrowRight}
        onClick={handleNextTab}
        aria-label='다음 탭'
        disabled={activeTab === tabs.length - 1}
      >
        ›
      </button>
    </div>
  );
}
