import api from "./client";

export const uploadImage = async (file) => {
  const formData = new FormData();

  formData.append("file", file);

  const response = await api.post("/api/v1/upload/image", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
