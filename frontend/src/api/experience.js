import api from "./client";

export const getExperiences = async () => {
  const response = await api.get("/api/v1/experiences");

  return response.data;
};

export const createExperience = async (data) => {
  const response = await api.post("/api/v1/experiences", data);

  return response.data;
};

export const updateExperience = async (experienceId, data) => {
  const response = await api.put(`/api/v1/experiences/${experienceId}`, data);

  return response.data;
};

export const deleteExperience = async (experienceId) => {
  const response = await api.delete(`/api/v1/experiences/${experienceId}`);

  return response.data;
};
