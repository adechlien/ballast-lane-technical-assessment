import { apiRequest } from "./api";

function authHeaders(token) {
  return {
    Authorization: `Bearer ${token}`,
  };
}

export function createSubbranch(token, branchId, payload) {
  return apiRequest(`/api/me/branches/${branchId}/subbranches`, {
    method: "POST",
    headers: authHeaders(token),
    body: JSON.stringify(payload),
  });
}

export function updateSubbranch(token, branchId, subbranchId, payload) {
  return apiRequest(`/api/me/branches/${branchId}/subbranches/${subbranchId}`, {
    method: "PATCH",
    headers: authHeaders(token),
    body: JSON.stringify(payload),
  });
}

export function deleteSubbranch(token, branchId, subbranchId) {
  return apiRequest(`/api/me/branches/${branchId}/subbranches/${subbranchId}`, {
    method: "DELETE",
    headers: authHeaders(token),
  });
}
