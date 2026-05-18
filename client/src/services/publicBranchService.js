import { apiRequest } from "./api";

export function getPublicBranches(search = "") {
  const params = new URLSearchParams();

  if (search.trim()) {
    params.set("search", search.trim());
  }

  const query = params.toString();

  return apiRequest(`/api/branches${query ? `?${query}` : ""}`);
}

export function getPublicBranchBySlug(slug) {
  return apiRequest(`/api/branches/${slug}`);
}
