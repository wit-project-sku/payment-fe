import React, { useState } from 'react';
import styles from './IssueTrackerPage.module.css';

export default function IssueTrackerPage() {
  const rawData = [
    {
      id: 1,
      status: '미처리',
      time: '25.11.17 16:00',
      detail: '1234-1234번 카드가 10,000원 결제 시도. 잔액 부족으로 인해 결제 실패',
      card: '카카오뱅크',
      cardNumber: '0000-00-111111',
      phone: '010-0000-0000',
      amount: '10,000원',
    },
    {
      id: 2,
      status: '미처리',
      time: '25.11.17 15:00',
      detail: '1234-1234번 카드가 25,000원 결제 시도. 도난 카드 사용으로 인해 결제 실패',
      card: '우리은행',
      cardNumber: '0000-00-222222',
      phone: '010-0000-0000',
      amount: '25,000원',
    },
    {
      id: 3,
      status: '처리 중',
      time: '25.11.17 09:00',
      detail: '1234-1234번 카드가 40,000원 결제 시도. 기기 오류로 인해 결제 실패',
      card: '신한은행',
      cardNumber: '0000-00-333333',
      phone: '010-0000-0000',
      amount: '40,000원',
    },
  ];

  const [filters, setFilters] = useState({
    unprocessed: true,
    processing: true,
    completed: true,
  });

  const [keyword, setKeyword] = useState('');
  const [selectedRow, setSelectedRow] = useState(null);

  const toggleFilter = (key) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredData = rawData.filter((row) => {
    if (!filters.unprocessed && row.status === '미처리') return false;
    if (!filters.processing && row.status === '처리 중') return false;
    if (!filters.completed && row.status === '처리 완료') return false;

    if (keyword.trim() !== '' && !row.detail.includes(keyword)) return false;

    return true;
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>이슈 트래커</h2>

      {/* 필터 */}
      <div className={styles.filterBox}>
        <label className={styles.filterLabel}>
          <input type='checkbox' checked={filters.unprocessed} onChange={() => toggleFilter('unprocessed')} />
          미처리
        </label>

        <label className={styles.filterLabel}>
          <input type='checkbox' checked={filters.processing} onChange={() => toggleFilter('processing')} />
          처리 중
        </label>

        <label className={styles.filterLabel}>
          <input type='checkbox' checked={filters.completed} onChange={() => toggleFilter('completed')} />
          처리 완료
        </label>

        <input type='date' className={styles.datePicker} />
        <span>~</span>
        <input type='date' className={styles.datePicker} />
      </div>

      {/* 검색 */}
      <div className={styles.searchBox}>
        <span className={styles.searchLabel}>검색명</span>
        <input
          className={styles.searchInput}
          placeholder='검색어를 입력해주세요.'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>

      {/* 카운트 */}
      <div className={styles.count}>전체 {filteredData.length}건</div>

      {/* 리스트 */}
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <span>상태</span>
          <span>발생 시간</span>
          <span>이슈 내용</span>
        </div>

        {filteredData.map((row) => (
          <div
            key={row.id}
            className={`${styles.row} ${
              row.status === '미처리'
                ? styles.unprocessed
                : row.status === '처리 중'
                ? styles.processing
                : styles.completed
            }`}
            onClick={() => setSelectedRow(row)}
          >
            <span>{row.status}</span>
            <span>{row.time}</span>
            <span>{row.detail}</span>
          </div>
        ))}
      </div>

      {/* 모달 */}
      {selectedRow && (
        <div className={styles.modalOverlay} onClick={() => setSelectedRow(null)}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>이슈 상세 정보</h3>
              <button className={styles.closeBtn} onClick={() => setSelectedRow(null)}>
                ✕
              </button>
            </div>

            {/* 상단 4개 요약 영역 */}
            <div className={styles.modalSummary}>
              <div>
                <div className={styles.summaryLabel}>처리 상태</div>
                <div className={styles.summaryValue}>{selectedRow.status}</div>
              </div>

              <div>
                <div className={styles.summaryLabel}>처리 여부</div>
                <div className={styles.summaryProcessing}>처리 중</div>
              </div>

              <div>
                <div className={styles.summaryLabel}>발생 시간</div>
                <div className={styles.summaryValue}>{selectedRow.time}</div>
              </div>

              <div>
                <div className={styles.summaryLabel}>결제 상태</div>
                <div className={styles.summarySuccess}>결제 성공</div>
              </div>
            </div>

            {/* 4칸 상세정보 */}
            <div className={styles.modalDetailGrid}>
              <div>
                <div className={styles.detailLabel}>카드사</div>
                <div className={styles.detailValue}>{selectedRow.card}</div>
              </div>

              <div>
                <div className={styles.detailLabel}>카드번호</div>
                <div className={styles.detailValue}>{selectedRow.cardNumber}</div>
              </div>

              <div>
                <div className={styles.detailLabel}>결제 금액</div>
                <div className={styles.detailValue}>{selectedRow.amount}</div>
              </div>

              <div>
                <div className={styles.detailLabel}>고객 전화번호</div>
                <div className={styles.detailValue}>{selectedRow.phone}</div>
              </div>
            </div>

            {/* 이슈 내용 */}
            <div>
              <div className={styles.sectionTitle}>이슈 내용</div>
              <p className={styles.issueText}>{selectedRow.detail}</p>
            </div>

            {/* 처리 내용 */}
            <div>
              <div className={styles.sectionTitle}>처리 내용</div>
              <textarea className={styles.textarea} placeholder='처리 내용을 작성해주세요.' />
            </div>

            {/* 버튼 영역 */}
            <div className={styles.modalButtons}>
              <button className={styles.redBtn}>미처리</button>
              <button className={styles.orangeBtn}>처리 중</button>
              <button className={styles.greenBtn}>처리 완료</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
