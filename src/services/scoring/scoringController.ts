// @ts-ignore
/* eslint-disable */
import request from '@/services/apiClient';

/** 此处后端没有提供注释 POST /add */
export async function addScoring(
  body: Scoring.AddScoringRequest,
  options?: { [key: string]: any },
) {
  return request<Scoring.ApiResponseBoolean>(`/scoring/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /add/me */
export async function addMyScoring(
  body: Scoring.AddMyScoringRequest,
  options?: { [key: string]: any },
) {
  return request<Scoring.ApiResponseBoolean>(`/scoring/add/me`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /add/me/batch */
export async function addMyScoringBatch(
  body: Scoring.AddMyScoringBatchRequest,
  options?: { [key: string]: any },
) {
  return request<Scoring.ApiResponseBoolean>(`/scoring/add/me/batch`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /delete */
export async function deleteScoring(body: Scoring.IdRequest, options?: { [key: string]: any }) {
  return request<Scoring.ApiResponseBoolean>(`/scoring/delete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /delete/me */
export async function deleteMyScoring(body: Scoring.IdRequest, options?: { [key: string]: any }) {
  return request<Scoring.ApiResponseBoolean>(`/scoring/delete/me`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /list */
export async function listScoring(
  body: Scoring.ListScoringRequest,
  options?: { [key: string]: any },
) {
  return request<Scoring.ApiResponsePageScoringVo>(`/scoring/list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /list/me */
export async function listMyScoring(
  body: Scoring.ListMyScoringRequest,
  options?: { [key: string]: any },
) {
  return request<Scoring.ApiResponsePageScoringVo>(`/scoring/list/me`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /update */
export async function updateScoring(
  body: Scoring.UpdateScoringRequest,
  options?: { [key: string]: any },
) {
  return request<Scoring.ApiResponseBoolean>(`/scoring/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /update/me */
export async function updateMyScoring(
  body: Scoring.UpdateMyScoringRequest,
  options?: { [key: string]: any },
) {
  return request<Scoring.ApiResponseBoolean>(`/scoring/update/me`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
