import CartItem from './CartItem';
import styles from './Cart.module.css';

export default function Cart({ items, onRemove, onIncrease, onDecrease }) {
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.itemsBox}>
          {items.map((item) => (
            <CartItem
              key={item.name}
              item={item}
              onRemove={() => onRemove(item.name)}
              onIncrease={() => onIncrease(item.name)}
              onDecrease={() => onDecrease(item.name)}
            />
          ))}
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.summaryTitle}>
          선택한 상품 <span className={styles.red}>{items.reduce((sum, item) => sum + item.quantity, 0)}개</span>
        </div>

        <div className={styles.totalLabel}>총 결제 금액</div>

        <div className={styles.totalPrice}>{totalPrice.toLocaleString()}원</div>

        <button className={styles.payButton}>결제하기</button>
      </div>
    </div>
  );
}
