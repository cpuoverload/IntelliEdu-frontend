// @ts-ignore
/* eslint-disable */
import request from '@/services/apiClient';

/** 此处后端没有提供注释 POST /add/me */
export async function addMyAnswerRecord(
  body: Answer.AddMyAnswerRequest,
  options?: { [key: string]: any },
) {
  return request<Answer.ApiResponseBoolean>(`/answer-record/add/me`, {
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
  return request<Answer.ApiResponseBoolean>(`/answer-record/delete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /list */
export async function listAnswerRecord(
  body: Answer.ListAnswerRequest,
  options?: { [key: string]: any },
) {
  return request<Answer.ApiResponsePageAnswerRecordVo>(`/answer-record/list`, {
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
  return request<Answer.ApiResponsePageAnswerRecordVo>(`/answer-record/list/me`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
