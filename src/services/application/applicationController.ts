// @ts-ignore
/* eslint-disable */
import request from '@/services/apiClient';

/** 此处后端没有提供注释 POST /add/me */
export async function addMyApplication(
  body: App.AddMyAppRequest,
  options?: { [key: string]: any },
) {
  return request<App.ApiResponseLong>(`/api/application/add/me`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /audit */
export async function auditApplication(
  body: App.AuditAppRequest,
  options?: { [key: string]: any },
) {
  return request<App.ApiResponseBoolean>(`/api/application/audit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /delete */
export async function deleteApplication(body: App.IdRequest, options?: { [key: string]: any }) {
  return request<App.ApiResponseBoolean>(`/api/application/delete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /delete/me */
export async function deleteMyApplication(body: App.IdRequest, options?: { [key: string]: any }) {
  return request<App.ApiResponseBoolean>(`/api/application/delete/me`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /get/${param0} */
export async function getApplicationById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: App.getApplicationByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<App.ApiResponseApplication>(`/api/application/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /list */
export async function listApplication(body: App.ListAppRequest, options?: { [key: string]: any }) {
  return request<App.ApiResponsePageApplicationVo>(`/api/application/list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /list/me */
export async function listMyApplication(
  body: App.ListMyAppRequest,
  options?: { [key: string]: any },
) {
  return request<App.ApiResponsePageApplicationVo>(`/api/application/list/me`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /list/public */
export async function listPublicApplication(
  body: App.ListPublicAppRequest,
  options?: { [key: string]: any },
) {
  return request<App.ApiResponsePageApplicationVo>(`/api/application/list/public`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /update */
export async function updateApplication(
  body: App.UpdateAppRequest,
  options?: { [key: string]: any },
) {
  return request<App.ApiResponseBoolean>(`/api/application/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /update/me */
export async function updateMyApplication(
  body: App.UpdateMyAppRequest,
  options?: { [key: string]: any },
) {
  return request<App.ApiResponseBoolean>(`/api/application/update/me`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
