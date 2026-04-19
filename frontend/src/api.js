import axios from "axios";

const API_URL = "https://oreo-ai-assistant.vercel.app";

export const postQuery = async (question) => {
  const res = await axios.post(API_URL, { question });
  return res.data;
};

