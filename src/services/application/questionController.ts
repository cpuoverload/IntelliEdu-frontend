// @ts-ignore
/* eslint-disable */
import request from '@/services/apiClient';

/** 此处后端没有提供注释 POST /question/add/me */
export async function addMyQuestion(
  body: App.AddMyQuestionRequest,
  options?: { [key: string]: any },
) {
  return request<App.ApiResponseBoolean>(`/api/application/question/add/me`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /question/ai_generate/sse */
export async function aiGenerateQuestionSse(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: App.aiGenerateQuestionSseParams,
  options?: { [key: string]: any },
) {
  return request<App.SseEmitter>(`/api/application/question/ai_generate/sse`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /question/delete */
export async function deleteQuestion(body: App.IdRequest, options?: { [key: string]: any }) {
  return request<App.ApiResponseBoolean>(`/api/application/question/delete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /question/delete/me */
export async function deleteMyQuestion(body: App.IdRequest, options?: { [key: string]: any }) {
  return request<App.ApiResponseBoolean>(`/api/application/question/delete/me`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /question/get/${param0} */
export async function getQuestionById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: App.getQuestionByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<App.ApiResponseQuestion>(`/api/application/question/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /question/get/me */
export async function getMyQuestionOfOneApp(
  body: App.GetMyQuestionRequest,
  options?: { [key: string]: any },
) {
  return request<App.ApiResponseQuestionVo>(`/api/application/question/get/me`, {
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
  body: App.GetPublicQuestionRequest,
  options?: { [key: string]: any },
) {
  return request<App.ApiResponseQuestionVo>(`/api/application/question/get/public`, {
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
  body: App.ListQuestionRequest,
  options?: { [key: string]: any },
) {
  return request<App.ApiResponsePageQuestionVo>(`/api/application/question/list`, {
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
  body: App.UpdateQuestionRequest,
  options?: { [key: string]: any },
) {
  return request<App.ApiResponseBoolean>(`/api/application/question/update`, {
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
  body: App.UpdateMyQuestionRequest,
  options?: { [key: string]: any },
) {
  return request<App.ApiResponseBoolean>(`/api/application/question/update/me`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
