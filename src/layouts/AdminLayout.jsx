import { Outlet } from 'react-router-dom';
import AdminHeader from '../components/common/AdminHeader';
import AdminNav from '../components/common/AdminNav';
import styles from './AdminLayout.module.css';

export default function AdminLayout() {
  return (
    <div className={styles.layoutContainer}>
      <AdminHeader />
      <div className={styles.bodyContainer}>
        <AdminNav />
        <div className={styles.contentArea}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
