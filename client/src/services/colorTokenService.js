import { apiRequest } from "./api";

function authHeaders(token) {
  return {
    Authorization: `Bearer ${token}`,
  };
}

export function createColorToken(token, subbranchId, payload) {
  return apiRequest(`/api/me/subbranches/${subbranchId}/tokens`, {
    method: "POST",
    headers: authHeaders(token),
    body: JSON.stringify(payload),
  });
}

export function updateColorToken(token, subbranchId, tokenId, payload) {
  return apiRequest(`/api/me/subbranches/${subbranchId}/tokens/${tokenId}`, {
    method: "PATCH",
    headers: authHeaders(token),
    body: JSON.stringify(payload),
  });
}

export function deleteColorToken(token, subbranchId, tokenId) {
  return apiRequest(`/api/me/subbranches/${subbranchId}/tokens/${tokenId}`, {
    method: "DELETE",
    headers: authHeaders(token),
  });
}
