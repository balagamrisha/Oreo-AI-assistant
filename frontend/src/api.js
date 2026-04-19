import axios from "axios";

export const postQuery = async (question) => {
  const res = await axios.post("http://localhost:5000/api/query", {
    question,
  });
  return res.data.response;
};