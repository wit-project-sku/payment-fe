import { APIService } from './axios';

/**
 * TL3800 승인 요청 API
 * @param {Object} payload - 결제 요청 데이터
 * {
 *   amount: "10",
 *   tax: "0",
 *   svc: "0",
 *   inst: "00",
 *   noSign: true
 * }
 */
export const approvePayment = async (payload) => {
  try {
    const res = await APIService.local.post('/tl3800/approve', payload);
    return res.data;
  } catch (err) {
    console.error('결제 승인 요청 실패:', err);
    throw err;
  }
};
