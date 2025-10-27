import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.post("/recommend", async (req, res) => {
  const { species, age, weight, allergy } = req.body;

  const prompt = `
  반려견 맞춤 사료 추천:
  종: ${species}, 나이: ${age}, 체중: ${weight}kg, 알러지: ${allergy}
  추천 사료 브랜드와 급여 팁을 알려줘.
  `;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );
    res.json({ result: response.data.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ error: "AI 추천 실패" });
  }
});

export default router;

