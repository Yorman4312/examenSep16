import { Router } from "express";
import {
  createAccount,
  getAccounts,
  getAccountById,
  consignarAccount,
  retirarAccount,
  deleteAccount
} from "../controllers/accountController.js";

const router = Router();

router.post("/", createAccount);
router.get("/", getAccounts);
router.get("/:id", getAccountById);
router.put("/consignar/:id", consignarAccount);
router.put("/retirar/:id", retirarAccount);
router.delete("/:id", deleteAccount);

export default router;