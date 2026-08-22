import api from "./client";

export const getSkills = async () => {
  const response = await api.get("/api/v1/skills");
  return response.data;
};

export const createSkill = async (data) => {
  const response = await api.post("/api/v1/skills", data);
  return response.data;
};

export const updateSkill = async (skillId, data) => {
  const response = await api.put(`/api/v1/skills/${skillId}`, data);

  return response.data;
};

export const deleteSkill = async (skillId) => {
  const response = await api.delete(`/api/v1/skills/${skillId}`);

  return response.data;
};
