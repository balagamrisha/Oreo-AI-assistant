import express from "express";
import { getAIResponse } from "../services/groq.js";
import QueryRecord from "../models/QueryRecord.js";

const router = express.Router();

router.post("/query", async (req, res) => {
  try {
    const { question } = req.body;

    // validation
    if (!question || question.trim() === "") {
      return res.status(400).json({ error: "Question is required" });
    }

    // call AI
    const aiResponse = await getAIResponse(question);

    // save to database
    await QueryRecord.create({
      question,
      response: aiResponse,
    });

    // send response
    res.json({ response: aiResponse });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;