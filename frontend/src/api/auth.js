import api from "./client";

export const register = async (data) => {
  const response = await api.post("/api/v1/auth/register", data);

  return response.data;
};

export const login = async (data) => {
  const response = await api.post("/api/v1/auth/login", data);

  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get("/api/v1/auth/me");

  return response.data;
};

export const logout = () => {
  localStorage.removeItem("access_token");
};

export const deleteAccount = async () => {
  const response = await api.delete("/api/v1/auth/account");

  return response.data;
};

export const googleLogin = async (credential) => {
  const response = await api.post("/api/v1/auth/google", {
    credential,
  });

  return response.data;
};
