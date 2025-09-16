import CreateAccount from "../../application/use-cases/CreateAccount.js";
import GetAccounts from "../../application/use-cases/GetAccounts.js";
import GetAccountById from "../../application/use-cases/GetAccountById.js";
import ConsignarAccount from "../../application/use-cases/ConsignarAccount.js";
import RetirarAccount from "../../application/use-cases/RetirarAccount.js";
import DeleteAccount from "../../application/use-cases/DeleteAccount.js";
import AccountRepositoryMongo from "../repositories/AccountRepositoryMongo.js";

const accountRepository = new AccountRepositoryMongo();

export const createAccount = async (req, res) => {
  try {
    const createAccount = new CreateAccount(accountRepository);
    const account = await createAccount.execute(req.body);
    res.status(201).json(account);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAccounts = async (req, res) => {
  try {
    const getAccounts = new GetAccounts(accountRepository);
    const accounts = await getAccounts.execute();
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAccountById = async (req, res) => {
  try {
    const getAccountById = new GetAccountById(accountRepository);
    const account = await getAccountById.execute(req.params.id);
    if(!account) return res.status(404).json({ message: "❌ Usuario no encontrado ❌"});
    res.json(account);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const consignarAccount = async (req, res) => {
  try {
    const consignarAccount = new ConsignarAccount(accountRepository);
    const account = await await consignarAccount.execute(req.params.id, req.saldo, req.consignar);
    if(!account) return res.status(404).json({ message: "❌ Usuario no encontrado ❌" });
    res.json(account);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const retirarAccount = async (req, res) => {
  try {
    const retirarAccount = new RetirarAccount(accountRepository);
    const account = await retirarAccount.execute(req.params.id, req.body, req.retirar);
    if(!account) return res.status(404).json({ message: "❌ Usuario no encontrado ❌" });
    res.json(account);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteAccount = async (req, res) => {
  try {
    const deleteAccount = new DeleteAccount(accountRepository);
    const result = await deleteAccount.execute(req.params.id);
    if(!result) return res.status(404).json({ message: "❌ Usuario no encontrado ❌" });
    res.json({ message: "✅ Usuario eliminado correctamente ✅" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};