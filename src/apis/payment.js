import { APIService } from './axios';

export const approvePayment = async (payload) => {
  try {
    const res = await APIService.local.post('/pay', {
      items: payload.items,
      totalAmount: payload.totalAmount,
      phoneNumber: payload.phoneNumber,
      inst: payload.inst,
      imageUrl: payload.imageUrl,
      delivery: payload.delivery,
    });
    return res;
  } catch (err) {
    console.error('결제 요청 실패:', err);
    throw err;
  }
};
