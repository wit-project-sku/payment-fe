import { useState, useCallback } from 'react';

export default function useCart() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = useCallback((item) => {
    setCartItems((prev) => {
      const exists = prev.find((p) => p.name === item.name);

      // 새로 담으려는 수량 (없으면 기본 1)
      const incomingQuantity = item.quantity ?? 1;

      if (exists) {
        // 기존 수량에 이번에 담은 수량을 더해줌
        return prev.map((p) => (p.name === item.name ? { ...p, quantity: p.quantity + incomingQuantity } : p));
      }

      // 처음 담는 상품이면 전달받은 quantity를 그대로 사용
      return [...prev, { ...item, quantity: incomingQuantity }];
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
