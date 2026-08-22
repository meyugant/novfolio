import api from "./client";

export const createProfile = async (data) => {
  const response = await api.post("/api/v1/profile", data);

  return response.data;
};

export const updateProfile = async (data) => {
  const response = await api.put("/api/v1/profile", data);

  return response.data;
};

export const deleteProfile = async () => {
  const response = await api.delete("/api/v1/profile");

  return response.data;
};
