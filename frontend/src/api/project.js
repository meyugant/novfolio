import api from "./client";

export const getProjects = async () => {
  const response = await api.get("/api/v1/projects");

  return response.data;
};

export const createProject = async (data) => {
  const response = await api.post("/api/v1/projects", data);

  return response.data;
};

export const updateProject = async (projectId, data) => {
  const response = await api.put(`/api/v1/projects/${projectId}`, data);

  return response.data;
};

export const deleteProject = async (projectId) => {
  const response = await api.delete(`/api/v1/projects/${projectId}`);

  return response.data;
};
