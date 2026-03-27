import express from "express";
import cors from "cors";
import coffeeRoutes from "./routes/coffee-routes";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/v1/health", (_req, res) => {
  res.status(200).json({ message: "API working" });
});

app.use("/api/v1/coffees", coffeeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});