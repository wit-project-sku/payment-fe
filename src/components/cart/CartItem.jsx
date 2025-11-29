import styles from './CartItem.module.css';

export default function CartItem({ item, onRemove, onIncrease, onDecrease }) {
  return (
    <div className={styles.itemRow}>
      <div className={styles.name}>{item.name}</div>

      <div className={styles.counter}>
        <button className={styles.counterBtn} onClick={() => onDecrease(item.id)}>
          -
        </button>

        <span className={styles.qty}>{item.quantity}</span>

        <button className={styles.counterBtn} onClick={() => onIncrease(item.id)}>
          +
        </button>
      </div>

      <div className={styles.price}>{item.price.toLocaleString()}원</div>

      <button className={styles.remove} onClick={() => onRemove(item.id)}>
        X
      </button>
    </div>
  );
}
