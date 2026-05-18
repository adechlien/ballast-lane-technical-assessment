import { apiRequest } from "./api";

function authHeaders(token) {
  return {
    Authorization: `Bearer ${token}`,
  };
}

export function getMyBranches(token) {
  return apiRequest("/api/me/branches", {
    headers: authHeaders(token),
  });
}

export function createBranch(token, payload) {
  return apiRequest("/api/me/branches", {
    method: "POST",
    headers: authHeaders(token),
    body: JSON.stringify(payload),
  });
}

export function updateBranch(token, branchId, payload) {
  return apiRequest(`/api/me/branches/${branchId}`, {
    method: "PATCH",
    headers: authHeaders(token),
    body: JSON.stringify(payload),
  });
}

export function deleteBranch(token, branchId) {
  return apiRequest(`/api/me/branches/${branchId}`, {
    method: "DELETE",
    headers: authHeaders(token),
  });
}

export function publishBranch(token, branchId) {
  return apiRequest(`/api/me/branches/${branchId}/publish`, {
    method: "PATCH",
    headers: authHeaders(token),
  });
}

export function unpublishBranch(token, branchId) {
  return apiRequest(`/api/me/branches/${branchId}/unpublish`, {
    method: "PATCH",
    headers: authHeaders(token),
  });
}
