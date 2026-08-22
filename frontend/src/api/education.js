import api from "./client";

export const getEducations = async () => {
  const response = await api.get("/api/v1/educations");

  return response.data;
};

export const createEducation = async (data) => {
  const response = await api.post("/api/v1/educations", data);

  return response.data;
};

export const updateEducation = async (educationId, data) => {
  const response = await api.put(`/api/v1/educations/${educationId}`, data);

  return response.data;
};

export const deleteEducation = async (educationId) => {
  const response = await api.delete(`/api/v1/educations/${educationId}`);

  return response.data;
};
