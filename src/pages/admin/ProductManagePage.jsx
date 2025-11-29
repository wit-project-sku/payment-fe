import React, { useState } from 'react';
import styles from './ProductManagePage.module.css';

export default function ProductManagePage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('WITH Goods');
  const [showModal, setShowModal] = useState(false);

  const [categories, setCategories] = useState(['WITH Goods', 'Custom Goods', 'Collabo Goods', '+']);
  const [addingCategory, setAddingCategory] = useState(false);
  const [newCategory, setNewCategory] = useState('');

  const data = [
    {
      name: 'AR 합성 아크릴 키링',
      date: '2025-11-17',
      price: '14,900',
    },
    {
      name: 'AR 합성 아크릴 키링',
      date: '2025-11-17',
      price: '14,900',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.title}>상품 관리</div>
      <div className={styles.searchBox}>
        <span className={styles.searchLabel}>상품명</span>
        <input
          type='text'
          className={styles.searchInput}
          placeholder='상품명을 입력해주세요.'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className={styles.categorySection}>
        <div className={styles.categoryBox}>
          <div className={styles.categoryBoxTitle}>카테고리</div>
          <div className={styles.categoryBoxList}>
            {categories.map((c) =>
              c === '+' ? (
                addingCategory ? (
                  <input
                    className={styles.categoryInput}
                    value={newCategory}
                    autoFocus
                    onChange={(e) => setNewCategory(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && newCategory.trim() !== '') {
                        setCategories((prev) => [...prev.slice(0, -1), newCategory, '+']);
                        setNewCategory('');
                        setAddingCategory(false);
                      }
                    }}
                    onBlur={() => {
                      setAddingCategory(false);
                      setNewCategory('');
                    }}
                  />
                ) : (
                  <div className={styles.categoryAddButton} onClick={() => setAddingCategory(true)}>
                    +
                  </div>
                )
              ) : (
                <div
                  className={
                    activeCategory === c ? `${styles.categoryItem} ${styles.categoryItemActive}` : styles.categoryItem
                  }
                  onClick={() => setActiveCategory(c)}
                >
                  {c}
                </div>
              ),
            )}
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <div className={styles.tableHeader}>
            <div>상품명</div>
            <div>등록일</div>
            <div>금액</div>
            <div>적용 위치</div>
            <div>수정</div>
          </div>
          {data.map((item, idx) => (
            <div className={styles.tableRow} key={idx}>
              <div>{item.name}</div>
              <div>{item.date}</div>
              <div>{item.price}</div>
              <div>인사동 남문 키오스크</div>
              <div className={styles.editIcon}>✎</div>
            </div>
          ))}
          <div className={styles.tablePlusRow} onClick={() => setShowModal(true)}>
            +
          </div>
        </div>
      </div>
      {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalClose} onClick={() => setShowModal(false)}>
              ✕
            </div>

            <div className={styles.modalForm}>
              <label className={styles.label}>상품명</label>
              <input className={styles.input} placeholder='상품명' />

              <div className={styles.row}>
                <div className={styles.col}>
                  <label className={styles.label}>금액 *</label>
                  <div className={styles.priceRow}>
                    <input className={styles.input} placeholder='금액' />
                    <span className={styles.unit}>원</span>
                  </div>
                </div>

                <div className={styles.col}>
                  <label className={styles.label}>적용 위치 *</label>
                  <select className={styles.select}>
                    <option>선택</option>
                  </select>
                </div>
              </div>

              <label className={styles.label}>이미지</label>
              <div className={styles.fileRow}>
                <input className={styles.input} placeholder='파일명' />
                <button className={styles.fileButton}>파일 선택</button>
              </div>

              <label className={styles.label}>상품 설명</label>
              <textarea className={styles.textarea} placeholder='상품 설명'></textarea>
              <div className={styles.limit}>0/300</div>

              <button className={styles.submitButton}>저장</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
