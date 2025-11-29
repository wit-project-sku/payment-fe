import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AdminNav.module.css';

export default function AdminNav() {
  const menu = [
    { label: '상품 관리', path: '/admin/products' },
    { label: '결제 내역', path: '/admin/payments' },
    { label: '이슈 트래커', path: '/admin/issues' },
  ];

  return (
    <nav className={styles.nav}>
      {menu.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => (isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem)}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
