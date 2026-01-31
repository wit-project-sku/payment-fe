import { APIService } from './axios';

const REQUEST_PART_NAME = 'request';

const buildRefundMultipart = (request, images = []) => {
  const formData = new FormData();

  formData.append(REQUEST_PART_NAME, new Blob([JSON.stringify(request)], { type: 'application/json' }));

  if (Array.isArray(images)) {
    images.filter(Boolean).forEach((file) => {
      formData.append('images', file);
    });
  }

  return formData;
};

// 환불 신청 생성 (POST /api/refunds)
export const createRefund = async (refundRequest, images = []) => {
  try {
    const formData = buildRefundMultipart(refundRequest, images);
    const res = await APIService.private.post('/refunds', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res;
  } catch (err) {
    console.error('환불 신청 실패:', err);
    throw err;
  }
};

// [관리자] 환불 상세 조회 (GET /api/refunds/admin/{refund-id})
export const getRefundByIdAdmin = async (refundId) => {
  try {
    const res = await APIService.private.get(`/refunds/admin/${refundId}`);
    return res;
  } catch (err) {
    console.error('환불 상세 조회(관리자) 실패:', err);
    throw err;
  }
};

// [관리자] 환불 내역 페이지 조회 (GET /api/refunds/admin?pageNum=&pageSize=)
export const getAllRefundsAdmin = async (pageNum = 1, pageSize = 7) => {
  try {
    const res = await APIService.private.get('/refunds/admin', {
      params: { pageNum, pageSize },
    });
    return res;
  } catch (err) {
    console.error('환불 내역 페이지 조회(관리자) 실패:', err);
    throw err;
  }
};
