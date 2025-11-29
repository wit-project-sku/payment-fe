import React, { useState } from 'react';
import styles from './PaymentHistoryPage.module.css';

export default function PaymentHistoryPage() {
  const [statusFilter, setStatusFilter] = useState({
    all: true,
    complete: false,
    fail: false,
  });

  const toggleFilter = (key) => {
    if (key === 'all') {
      setStatusFilter({ all: true, complete: false, fail: false });
    } else {
      const updated = {
        ...statusFilter,
        all: false,
        [key]: !statusFilter[key],
      };
      setStatusFilter(updated);
    }
  };

  const rawData = [
    {
      date: '2025-11-17',
      time: '21:38:19',
      card: '우리',
      cardNumber: '0000-0000-0000-0000',
      amount: '28,000',
      phone: '010-0000-0000',
      status: 'success',
    },
    {
      date: '2025-11-17',
      time: '21:38:19',
      card: '-',
      cardNumber: '-',
      amount: '28,000',
      phone: '010-0000-0000',
      status: 'fail',
    },
  ];

  const filteredData = rawData.filter((item) => {
    if (statusFilter.all) return true;
    if (statusFilter.complete && item.status === 'success') return true;
    if (statusFilter.fail && item.status === 'fail') return true;
    return false;
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>결제 내역</h2>

      <div className={styles.filterBox}>
        <div className={styles.filterLeft}>
          <label className={styles.filterLabel}>
            <input type='checkbox' checked={statusFilter.all} onChange={() => toggleFilter('all')} />
            전체
          </label>

          <label className={styles.filterLabel}>
            <input type='checkbox' checked={statusFilter.complete} onChange={() => toggleFilter('complete')} />
            결제 완료
          </label>

          <label className={styles.filterLabel}>
            <input type='checkbox' checked={statusFilter.fail} onChange={() => toggleFilter('fail')} />
            결제 실패
          </label>
        </div>

        <div className={styles.datePicker}>
          <span>2025.11.14 (금) ~ 2025.11.15 (토)</span>
        </div>
      </div>

      <div className={styles.searchBox}>
        <div className={styles.searchLabel}>검색명</div>
        <input className={styles.searchInput} placeholder='검색어를 입력해주세요.' />
      </div>

      <div className={styles.count}>전체 {filteredData.length}건</div>

      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <div>승인 일자</div>
          <div>승인 시각</div>
          <div>카드사</div>
          <div>카드번호</div>
          <div>금액</div>
          <div>전화번호</div>
          <div>결제 상태</div>
        </div>

        {filteredData.map((d, i) => (
          <div key={i} className={styles.row}>
            <div>{d.date}</div>
            <div>{d.time}</div>
            <div>{d.card}</div>
            <div>{d.cardNumber}</div>
            <div>{d.amount}</div>
            <div>{d.phone}</div>
            <div>
              <span className={d.status === 'success' ? styles.successBadge : styles.failBadge}>
                {d.status === 'success' ? '성공' : '실패'}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        <span>{'<'}</span>
        <span className={styles.activePage}>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>{'>'}</span>
      </div>
    </div>
  );
}
