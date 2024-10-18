// @ts-ignore
/* eslint-disable */
import request from '@/services/apiClient';

/** 此处后端没有提供注释 POST /add/me */
export async function addMyApplication(
  body: Application.AddMyAppRequest,
  options?: { [key: string]: any },
) {
  return request<Application.ApiResponseBoolean>(`/application/add/me`, {
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
  body: Application.AuditAppRequest,
  options?: { [key: string]: any },
) {
  return request<Application.ApiResponseBoolean>(`/application/audit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /delete */
export async function deleteApplication(
  body: Application.IdRequest,
  options?: { [key: string]: any },
) {
  return request<Application.ApiResponseBoolean>(`/application/delete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /delete/me */
export async function deleteMyApplication(
  body: Application.IdRequest,
  options?: { [key: string]: any },
) {
  return request<Application.ApiResponseBoolean>(`/application/delete/me`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /list */
export async function listApplication(
  body: Application.ListAppRequest,
  options?: { [key: string]: any },
) {
  return request<Application.ApiResponsePageApplicationVo>(`/application/list`, {
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
  body: Application.ListMyAppRequest,
  options?: { [key: string]: any },
) {
  return request<Application.ApiResponsePageApplicationVo>(`/application/list/me`, {
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
  body: Application.ListPublicAppRequest,
  options?: { [key: string]: any },
) {
  return request<Application.ApiResponsePageApplicationVo>(`/application/list/public`, {
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
  body: Application.UpdateAppRequest,
  options?: { [key: string]: any },
) {
  return request<Application.ApiResponseBoolean>(`/application/update`, {
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
  body: Application.UpdateMyAppRequest,
  options?: { [key: string]: any },
) {
  return request<Application.ApiResponseBoolean>(`/application/update/me`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
