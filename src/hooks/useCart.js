import { useState, useCallback } from 'react';

export default function useCart() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = useCallback((item) => {
    setCartItems((prev) => {
      const exists = prev.find((p) => p.name === item.name);
      if (exists) {
        return prev.map((p) => (p.name === item.name ? { ...p, quantity: p.quantity + 1 } : p));
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((name) => {
    setCartItems((prev) => prev.filter((item) => item.name !== name));
  }, []);

  const decreaseItem = useCallback((name) => {
    setCartItems((prev) =>
      prev
        .map((item) => (item.name === name ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0),
    );
  }, []);

  const increaseItem = useCallback((name) => {
    setCartItems((prev) => prev.map((item) => (item.name === name ? { ...item, quantity: item.quantity + 1 } : item)));
  }, []);

  return {
    cartItems,
    addToCart,
    removeFromCart,
    decreaseItem,
    increaseItem,
  };
}
