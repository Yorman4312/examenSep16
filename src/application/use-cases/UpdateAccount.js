export default class UpdateAccount {
  constructor(accountRepository) {
    this.accountRepository = accountRepository;
  }

  async execute(id, accountData) {
    const account = await this.accountRepository.findById(id);
    if (!account) return null;
    

    Object.assign(account, accountData);

    account.retirar = (account.saldo - account.retirar || 0);
    let retirar = account.retirar;
    account.saldo = retirar;
    
    account.consignar = (account.saldo + account.consignar || 0);
    let consignar = account.consignar;
    account.saldo = consignar;

    account.consignar = 0;
    account.retirar = 0;

    account.totalTrans = (account.totalTrans || 0) + 1;

    return await this.accountRepository.update(id, account);
  }
}