import styles from './GoodsItem.module.css';

export default function GoodsItem({ image, name, desc, price, onClick }) {
  const item = { image, name, desc, price };

  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.thumbnail} onClick={() => onClick(item)} />

      <div className={styles.name}>{name}</div>
      <div className={styles.desc}>{desc}</div>
      <div className={styles.price}>{price.toLocaleString()}원</div>
    </div>
  );
}
