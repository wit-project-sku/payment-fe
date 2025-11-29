import { useState, useEffect } from 'react';
import { getProductDetail } from '@api/productApi';
import styles from './ProductDetailModal.module.css';

export default function ProductDetailModal({ item, onClose, onAdd }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [detail, setDetail] = useState(null);

  useEffect(() => {
    if (!item?.id) return;
    getProductDetail(item.id)
      .then((res) => setDetail(res.data))
      .catch((err) => console.error(err));
  }, [item]);

  if (!item) return null;

  const images =
    Array.isArray(detail?.images) && detail.images.length > 0
      ? detail.images.map((img) => img.imageUrl)
      : detail?.image
      ? [detail.image]
      : [];

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <h2 className={styles.modalTitle}>상품 상세보기</h2>

        <div className={styles.modalSubtitle}>
          {detail?.categoryName} &gt; {detail?.name}
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.carouselContainer}>
            <button
              className={styles.carouselPrev}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
              }}
            >
              ‹
            </button>

            <img src={images[currentIndex]} alt={detail?.name} className={styles.mainImage} />

            <button
              className={styles.carouselNext}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
              }}
            >
              ›
            </button>
          </div>
        </div>

        <p className={styles.description}>{detail?.description}</p>

        <div className={styles.price}>{detail?.price?.toLocaleString()}원</div>

        <div className={styles.buttonRow}>
          <button className={styles.cancelBtn} onClick={onClose}>
            닫기
          </button>

          <button
            className={styles.addBtn}
            onClick={() => {
              onAdd(item);
              onClose();
            }}
          >
            담기
          </button>
        </div>
      </div>
    </div>
  );
}
