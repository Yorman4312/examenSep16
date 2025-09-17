export default class CreateAccount {
  constructor(accountRepository) {
    this.accountRepository = accountRepository;
  }

  async execute(accountData) {
    if(!accountData.totalTrans || accountData.totalTrans >= 1) {
      accountData.totalTrans + 1;
    };
    return await this.accountRepository.create(accountData);
  }
}