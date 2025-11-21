// src/pages/NotFound/NotFound.jsx

import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.code}>404</div>
      <div className={styles.message}>페이지를 찾을 수 없습니다.</div>
      <button className={styles.homeBtn} onClick={() => navigate('/')}>
        홈으로 이동
      </button>
    </div>
  );
}
