import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.post("/start", async (req, res) => {
  const { amount, orderName } = req.body;

  try {
    const response = await axios.post(
      "https://api.tosspayments.com/v1/payments",
      {
        amount,
        orderName,
        successUrl: "http://localhost:3000/success",
        failUrl: "http://localhost:3000/fail"
      },
      {
        headers: {
          Authorization:
            "Basic " + Buffer.from(process.env.TOSS_SECRET_KEY + ":").toString("base64"),
          "Content-Type": "application/json",
        },
      }
    );
    res.json({ url: response.data.checkout.url });
  } catch (err) {
    res.status(500).json({ error: "결제 요청 실패" });
  }
});

export default router;

