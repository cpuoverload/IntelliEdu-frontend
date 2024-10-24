// @ts-ignore
/* eslint-disable */
import request from '@/services/apiClient';

/** 此处后端没有提供注释 POST /add/me */
export async function addMyAnswerRecord(
  body: Answer.AddMyAnswerRequest,
  options?: { [key: string]: any },
) {
  return request<Answer.ApiResponseLong>(`/api/answer-record/add/me`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /delete */
export async function deleteAnswerRecord(body: Answer.IdRequest, options?: { [key: string]: any }) {
  return request<Answer.ApiResponseBoolean>(`/api/answer-record/delete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /get/${param0} */
export async function getAnswerRecordById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: Answer.getAnswerRecordByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Answer.ApiResponseAnswerRecordVo>(`/api/answer-record/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /list */
export async function listAnswerRecord(
  body: Answer.ListAnswerRequest,
  options?: { [key: string]: any },
) {
  return request<Answer.ApiResponsePageAnswerRecordVo>(`/api/answer-record/list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /list/me */
export async function listMyAnswerRecord(
  body: Answer.ListMyAnswerRequest,
  options?: { [key: string]: any },
) {
  return request<Answer.ApiResponsePageAnswerRecordVo>(`/api/answer-record/list/me`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
