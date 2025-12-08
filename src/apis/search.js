import { APIService } from './axios';

export const fetchOrderByPhone = async (phoneNumber) => {
  try {
    const res = await APIService.public.get('/pay/phone', {
      params: { phoneNumber },
    });
    return res.data;
  } catch (err) {
    console.error('주문 조회 실패:', err);
    throw err;
  }
};
