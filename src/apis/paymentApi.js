import { APIService } from './axios';

export const approvePayment = async (payload) => {
  try {
    const res = await APIService.local.post('/payments', {
      items: payload.items,
      totalAmount: payload.totalAmount,
      phoneNumber: payload.phoneNumber,
      customImageUrl: payload.imageUrl,
      delivery: payload.delivery,
    });
    return res;
  } catch (err) {
    console.error('결제 요청 실패:', err);
    throw err;
  }
};

export const fetchOrderByPhone = async (phoneNumber) => {
  try {
    const res = await APIService.public.get('/payments/search', {
      params: { phoneNumber },
    });
    return res;
  } catch (err) {
    console.error('주문 조회 실패:', err);
    throw err;
  }
};

// 승인 번호로 특정 결제 내역 조회
export const getPaymentByApprovalNumber = async (approvalNumber) => {
  try {
    const res = await APIService.public.get(`/payments/${approvalNumber}`);
    return res;
  } catch (err) {
    console.error('결제 내역 조회 실패:', err);
    throw err;
  }
};
