import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
  nroCuenta: Number,
  nombreCliente: String,
  saldo: Number,
  totalTrans: { type: Number, required: true, default: 0 },
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
  async update(id, accountData) {
    return await AccountModel.findByIdAndUpdate(id, accountData, { new: true });
  }
  async delete(id) {
    return await AccountModel.findByIdAndDelete(id);
  }
}

export default AccountRepositoryMongo;