import api from "./client";

export const getSocialLinks = async () => {
  const response = await api.get("/api/v1/social-links");
  return response.data;
};

export const createSocialLink = async (data) => {
  const response = await api.post("/api/v1/social-links", data);
  return response.data;
};

export const updateSocialLink = async (socialLinkId, data) => {
  const response = await api.put(`/api/v1/social-links/${socialLinkId}`, data);

  return response.data;
};

export const deleteSocialLink = async (socialLinkId) => {
  const response = await api.delete(`/api/v1/social-links/${socialLinkId}`);

  return response.data;
};
