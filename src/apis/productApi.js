import { APIService } from './axios';

export const getProductsByCategory = async (categoryId, kioskId = 3) => {
  try {
    const res = await APIService.public.get(`/products/categories/${categoryId}`, {
      params: {
        kioskId,
      },
    });

    return res;
  } catch (err) {
    console.error('상품 조회 실패:', err);
    throw err;
  }
};

export const getProductDetail = async (productId) => {
  try {
    const res = await APIService.public.get(`/products/${productId}`);
    return res;
  } catch (err) {
    console.error('상품 상세 조회 실패:', err);
    throw err;
  }
};
