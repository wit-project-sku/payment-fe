import { Outlet } from 'react-router-dom';
import styles from './KioskLayout.module.css';
import StoreSubHeader from '@commons/StoreSubHeader';
import Cart from '@components/cart/Cart';
import { useState } from 'react';
import useCart from '@hooks/useCart';

export default function KioskLayout() {
  const [activeTab, setActiveTab] = useState(0);
  const [categories, setCategories] = useState([]);
  const { cartItems, addToCart, removeFromCart, decreaseItem, increaseItem } = useCart();

  return (
    <div className={styles.layout}>
      <StoreSubHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        categories={categories}
        setCategories={setCategories}
      />
      <div className={styles.content}>
        <Outlet context={{ addToCart, activeTab, categories }} />
      </div>
      <Cart items={cartItems} onRemove={removeFromCart} onIncrease={increaseItem} onDecrease={decreaseItem} />
    </div>
  );
}
