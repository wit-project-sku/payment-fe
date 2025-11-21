import styles from './CartItem.module.css';

export default function CartItem({ item, onRemove, onIncrease, onDecrease }) {
  return (
    <div className={styles.itemRow}>
      <div className={styles.name}>{item.name}</div>

      <div className={styles.counter}>
        <button onClick={onDecrease}>-</button>
        <span>{item.quantity}</span>
        <button onClick={onIncrease}>+</button>
      </div>

      <div className={styles.price}>{item.price.toLocaleString()}</div>

      <button className={styles.remove} onClick={onRemove}>
        X
      </button>
    </div>
  );
}
