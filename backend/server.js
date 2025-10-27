import express from "express";
import cors from "cors";
import aiRoutes from "./routes/ai.js";
import paymentRoutes from "./routes/payment.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/ai", aiRoutes);
app.use("/api/payment", paymentRoutes);

app.listen(process.env.PORT, () =>
  console.log(`✅ Backend running on http://localhost:${process.env.PORT}`)
);

