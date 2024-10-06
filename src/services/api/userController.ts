// @ts-ignore
/* eslint-disable */
import request from '@/services/apiClient';

/** 此处后端没有提供注释 POST /add */
export async function addUser(body: API.AddRequest, options?: { [key: string]: any }) {
  return request<API.ApiResponseLong>(`/user/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /delete */
export async function deleteUser(body: API.IdRequest, options?: { [key: string]: any }) {
  return request<API.ApiResponseBoolean>(`/user/delete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /get/${param0} */
export async function getUserById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ApiResponseUserVo>(`/user/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /get/me */
export async function getMyInfo(options?: { [key: string]: any }) {
  return request<API.ApiResponseUserVo>(`/user/get/me`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /list */
export async function listUser(body: API.ListRequest, options?: { [key: string]: any }) {
  return request<API.ApiResponsePageUserVo>(`/user/list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /login */
export async function login(body: API.RegisterRequest, options?: { [key: string]: any }) {
  return request<API.ApiResponseUserVo>(`/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /logout */
export async function logout(options?: { [key: string]: any }) {
  return request<API.ApiResponseBoolean>(`/user/logout`, {
    method: 'POST',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /register */
export async function register(body: API.RegisterRequest, options?: { [key: string]: any }) {
  return request<API.ApiResponseLong>(`/user/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /update */
export async function updateUser(body: API.UpdateRequest, options?: { [key: string]: any }) {
  return request<API.ApiResponseBoolean>(`/user/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /update/me */
export async function updateMyInfo(
  body: API.UpdateMyInfoRequest,
  options?: { [key: string]: any },
) {
  return request<API.ApiResponseBoolean>(`/user/update/me`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
