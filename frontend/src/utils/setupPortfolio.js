import { getMyPortfolio, createPortfolio } from "../api/portfolio";

export const setupPortfolio = async (email) => {
  try {
    return await getMyPortfolio();
  } catch (error) {
    if (error.response?.status !== 404) {
      throw error;
    }

    const emailName = email.split("@")[0];

    let slug = emailName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    await createPortfolio({
      slug,
      title: `${emailName}'s Portfolio`,
      template: "default",
    });

    return await getMyPortfolio();
  }
};
