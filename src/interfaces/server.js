import express from "express";
import accountRoutes from "../infrastructure/routes/accountRoutes.js";

const app = express();

app.use(express.json());
app.use("/api/accounts", accountRoutes);

export default app;