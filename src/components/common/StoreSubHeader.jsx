import { useEffect, useState } from 'react';
import { getCategories } from '@api/categoryApi';
import styles from './StoreSubHeader.module.css';

export default function StoreSubHeader({ activeTab, setActiveTab, setCategories }) {
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
    if (!tabs.length || activeTab === 0) return;

    setActiveTab((prev) => {
      const next = prev - 1;
      if (next < startIndex) {
        setStartIndex(next);
      }
      return next;
    });
  };

  const handleNextTab = () => {
    if (!tabs.length || activeTab === tabs.length - 1) return;

    setActiveTab((prev) => {
      const next = prev + 1;
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
    <div className={styles.storeSubHeader}>
      {/* LEFT ARROW */}
      <div className={styles.tab} style={{ flex: '0 0 80px', fontSize: '48px' }} onClick={handlePrevTab}>
        ‹
      </div>

      {/* TABS */}
      {tabs.slice(startIndex, startIndex + VISIBLE_COUNT).map((tab, offset) => {
        const index = startIndex + offset;
        const isActive = activeTab === index;

        return (
          <div
            key={index}
            className={`${styles.tab} ${isActive ? styles.active : ''}`}
            onClick={() => handleSelectTab(index)}
          >
            {tab}

            {index !== startIndex + VISIBLE_COUNT - 1 && index !== tabs.length - 1 && (
              <div className={styles.divider}></div>
            )}
          </div>
        );
      })}

      {/* RIGHT ARROW */}
      <div className={styles.tab} style={{ flex: '0 0 80px', fontSize: '48px' }} onClick={handleNextTab}>
        ›
      </div>
    </div>
  );
}
