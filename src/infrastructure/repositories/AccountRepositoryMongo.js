import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
  nroCuenta: Number,
  nombreCliente: String,
  saldo: Number,
});

const AccountModel = mongoose.model("Account", AccountSchema);

class AccountRepositoryMongo {
  async create(accountData) {
    const account = new AccountModel(accountData);
    return await account.save();
  }
  async findAll() {
    return await AccountModel.find();
  }
  async findById(id) {
    return await AccountModel.findById(id);
  }
  async consignar(id, saldo, consignar) {
    return await AccountModel.findByIdAndUpdate(id, saldo = saldo + consignar, { new: true });
  }
  async retirar(id, saldo, retirar) {
    return await AccountModel.findByIdAndUpdate(id, saldo = saldo - retirar, { new: true });
  }
}

export default AccountRepositoryMongo;