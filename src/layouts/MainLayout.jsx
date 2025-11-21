import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';
import Header from '@commons/Header';
import Cart from '@components/cart/Cart';
import { useState } from 'react';

export default function MainLayout() {
  const [cartItems, setCartItems] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      const exists = prev.find((p) => p.name === item.name);
      if (exists) {
        return prev.map((p) => (p.name === item.name ? { ...p, quantity: p.quantity + 1 } : p));
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleRemove = (name) => {
    setCartItems((prev) => prev.filter((item) => item.name !== name));
  };

  const handleDecrease = (name) => {
    setCartItems((prev) =>
      prev
        .map((item) => (item.name === name ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0),
    );
  };

  const handleIncrease = (name) => {
    setCartItems((prev) => prev.map((item) => (item.name === name ? { ...item, quantity: item.quantity + 1 } : item)));
  };

  return (
    <div className={styles.layout}>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className={styles.content}>
        <Outlet context={{ handleAddToCart, activeTab }} />
      </div>
      <Cart items={cartItems} onRemove={handleRemove} onIncrease={handleIncrease} onDecrease={handleDecrease} />
    </div>
  );
}
