import GoodsItem from '@components/goods/GoodsItem';
import styles from './ShopPage.module.css';
import { useOutletContext } from 'react-router-dom';
import { goodsData } from '@datas/goodsData';

export default function ShopPage() {
  const { handleAddToCart } = useOutletContext();

  const { activeTab } = useOutletContext();

  const categoryMap = {
    0: 'WITH',
    1: 'CUSTOM',
    2: 'COLLABO',
  };

  const filteredGoods = goodsData.filter((item) => item.category === categoryMap[activeTab]);

  return (
    <div className={styles.grid}>
      {filteredGoods.map((item, i) => (
        <div key={i} onClick={() => handleAddToCart(item)}>
          <GoodsItem {...item} />
        </div>
      ))}
    </div>
  );
}
