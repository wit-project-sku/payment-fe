import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RefundPage.module.css';
import noticeImg from '@assets/images/notice.png';
import leftArrow from '@assets/images/leftArrow.png';

export default function RefundPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    orderNo: '',
    phone: '',
    reason: '',
    detail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const onlyNumber = value.replace(/[^0-9]/g, '');
      setForm((prev) => ({ ...prev, [name]: onlyNumber }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const isValid = form.orderNo.trim() && form.phone.trim() && form.reason.trim() && form.detail.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    navigate('/mobile/mainpage');
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pageContainer}>
        <img src={leftArrow} alt='back' className={styles.backButton} onClick={() => navigate(-1)} />
        <header className={styles.header}>
          <h1 className={styles.title}>환불 / 교환 신청</h1>
          <p className={styles.subtitle}>불량품에 대한 교환 및 환불을 신청해주세요.</p>
        </header>

        <section className={styles.importantBox}>
          <div className={styles.importantTitle}>
            <img src={noticeImg} alt='notice' className={styles.noticeIcon} />
            중요
          </div>
          <p className={styles.importantText}>
            본 제품은 개인 맞춤 제작 상품으로 <span className={styles.importantEmphasis}>단순 변심은 불가</span>합니다.
            불량품 (제작 하자, 배송 파손 등)의 경우에만 교환 또는 환불이 가능합니다.
          </p>
        </section>

        <button
          type='button'
          className={styles.policyButton}
          onClick={() => window.open('https://witglobal.com', '_blank')}
        >
          교환 및 환불 정책 전문 보기
        </button>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>
              주문번호 <span className={styles.required}>*</span>
            </label>
            <input
              name='orderNo'
              value={form.orderNo}
              onChange={handleChange}
              placeholder='ORD-2025-001'
              className={styles.input}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>
              연락 가능한 전화번호 <span className={styles.required}>*</span>
            </label>
            <input
              name='phone'
              value={form.phone}
              onChange={handleChange}
              placeholder='숫자만 입력해주세요'
              className={styles.input}
              maxLength={11}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>
              불량 사유 선택 <span className={styles.required}>*</span>
            </label>
            <select name='reason' value={form.reason} onChange={handleChange} className={styles.select}>
              <option value=''>클릭하여 선택하기</option>
              <option value='print'>인쇄 불량</option>
              <option value='damage'>파손 / 스크래치</option>
              <option value='color'>색상 차이</option>
              <option value='etc'>기타</option>
            </select>
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>
              상세 설명 <span className={styles.required}>*</span>
            </label>
            <textarea
              name='detail'
              value={form.detail}
              onChange={handleChange}
              className={styles.textarea}
              placeholder='불량 내용을 자세히 설명해주세요. (사진 첨부 권장)'
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>
              불량 상태 사진 첨부 (2~3장 권장) <span className={styles.required}>*</span>
            </label>
            <div className={styles.uploadBox}>
              <div className={styles.uploadIcon}>📦</div>
              <div className={styles.uploadText}>불량 부분 사진을 첨부해주세요</div>
              <div className={styles.uploadSubText}>(최대 5장)</div>
            </div>
          </div>

          {/* 처리 절차 */}
          <section className={styles.infoBox}>
            <div className={styles.infoTitle}>처리 절차</div>
            <ul className={styles.infoList}>
              <li>① 불량품 신고 접수 (고객센터 또는 이메일)</li>
              <li>② 불량 확인 (영업일 기준 1~2일 소요)</li>
              <li>③ 교환 또는 환불 진행</li>
              <li>④ 교환 제품 재발송 또는 환불 처리</li>
            </ul>
          </section>

          {/* 유의사항 */}
          <section className={styles.infoBox}>
            <div className={styles.infoTitle}>유의사항</div>
            <ul className={styles.infoList}>
              <li>· 제품 수령 후 7일 이내에만 불량 신고 가능</li>
              <li>· 고객 부주의로 인한 파손은 교환/환불 불가</li>
            </ul>
          </section>

          <button
            type='submit'
            className={`${styles.submitButton} ${isValid ? styles.active : ''}`}
            disabled={!isValid}
          >
            신청하기
          </button>
        </form>

        <footer className={styles.footer}>
          <p className={styles.footerQuestion}>문의사항이 있으신가요?</p>
          <p className={styles.footerLine}>고객센터: 010-8792-2028 (평일 09:00-18:00)</p>
          <p className={styles.footerLine}>이메일: unijun0109@gmail.com</p>
          <p className={styles.footerLine}>카카오톡: @WIT상담</p>
        </footer>
      </div>
    </div>
  );
}
