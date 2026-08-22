import api from "./client";

export const getMyPortfolio = async () => {
  const response = await api.get("/api/v1/portfolios/me");

  return response.data;
};

export const createPortfolio = async (data) => {
  const response = await api.post("/api/v1/portfolios", data);

  return response.data;
};

export const publishPortfolio = async () => {
  const response = await api.post("/api/v1/portfolios/publish");

  return response.data;
};

export const unpublishPortfolio = async () => {
  const response = await api.post("/api/v1/portfolios/unpublish");

  return response.data;
};
