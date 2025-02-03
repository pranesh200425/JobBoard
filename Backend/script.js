import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: "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", 
  baseURL: "https://integrate.api.nvidia.com/v1",
});

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "meta/llama-3.3-70b-instruct",
      messages: [
        {
            "role":"assistant",
            "content":"just give the role, company, location, the website, salary. Give it as a javascript object and nothing else"},
        { role: "user", content: message }],
      temperature: 0.2, 
      top_p: 0.7,
      max_tokens: 1024,
      stream: false, 
    });

    console.log("Llama Response:", completion.choices[0]?.message?.content);
    res.json({ reply: completion.choices[0]?.message?.content });
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    res.status(500).json({ error: "API request failed" });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
