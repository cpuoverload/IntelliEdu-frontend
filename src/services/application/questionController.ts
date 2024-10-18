// @ts-ignore
/* eslint-disable */
import request from '@/services/apiClient';

/** 此处后端没有提供注释 POST /question/add/me */
export async function addMyQuestion(
  body: Application.AddMyQuestionRequest,
  options?: { [key: string]: any },
) {
  return request<Application.ApiResponseBoolean>(`/application/question/add/me`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /question/delete */
export async function deleteQuestion(
  body: Application.IdRequest,
  options?: { [key: string]: any },
) {
  return request<Application.ApiResponseBoolean>(`/application/question/delete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /question/delete/me */
export async function deleteMyQuestion(
  body: Application.IdRequest,
  options?: { [key: string]: any },
) {
  return request<Application.ApiResponseBoolean>(`/application/question/delete/me`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /question/get/me */
export async function getMyQuestionOfOneApp(
  body: Application.GetMyQuestionRequest,
  options?: { [key: string]: any },
) {
  return request<Application.ApiResponseQuestionVo>(`/application/question/get/me`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /question/get/public */
export async function getPublicQuestionOfOneApp(
  body: Application.GetPublicQuestionRequest,
  options?: { [key: string]: any },
) {
  return request<Application.ApiResponseQuestionVo>(`/application/question/get/public`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /question/list */
export async function listQuestion(
  body: Application.ListQuestionRequest,
  options?: { [key: string]: any },
) {
  return request<Application.ApiResponsePageQuestionVo>(`/application/question/list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /question/update */
export async function updateQuestion(
  body: Application.UpdateQuestionRequest,
  options?: { [key: string]: any },
) {
  return request<Application.ApiResponseBoolean>(`/application/question/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /question/update/me */
export async function updateMyQuestion(
  body: Application.UpdateMyQuestionRequest,
  options?: { [key: string]: any },
) {
  return request<Application.ApiResponseBoolean>(`/application/question/update/me`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
