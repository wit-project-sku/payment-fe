import { APIService } from './axios';

export const fetchDeliveryByPhone = async (phoneNumber) => {
  try {
    const res = await APIService.public.get('/deliveries/search', {
      params: { phoneNumber },
    });
    return res;
  } catch (err) {
    console.error('주문 조회 실패:', err);
    throw err;
  }
};

export const saveDeliveryOptions = async (deliveryId, payload) => {
  try {
    const res = await APIService.public.put(`/deliveries/${deliveryId}`, payload);
    return res;
  } catch (err) {
    console.error('배송 옵션 저장 실패:', err);
    throw err;
  }
};
