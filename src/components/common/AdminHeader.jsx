import React from 'react';
import styles from './AdminHeader.module.css';

export default function AdminHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>WIT KIOSK</div>

      <div className={styles.rightSection}>
        <span>키오스크 관리자 님</span>
        <div className={styles.profileIcon}></div>
      </div>
    </header>
  );
}
