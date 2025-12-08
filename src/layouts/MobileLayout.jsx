import { Outlet } from 'react-router-dom';
import styles from './MobileLayout.module.css';

export default function MobileLayout() {
  return (
    <div className={styles.wrapper}>
      <Outlet />
    </div>
  );
}
