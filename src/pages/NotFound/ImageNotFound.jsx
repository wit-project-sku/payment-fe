import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../NotFound/ImageNotFound.module.css';

export default function ImageNotFound() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/kiosk/store');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className={styles.wrapper}>
      <p className={styles.message}>촬영한 이미지를 찾을 수 없습니다.</p>
      <p className={styles.subMessage}>촬영 화면으로 이동합니다 ({seconds}초)</p>
    </div>
  );
}
