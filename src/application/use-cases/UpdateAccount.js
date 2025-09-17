export default class UpdateAccount {
  constructor(accountRepository) {
    this.accountRepository = accountRepository;
  }

  async execute(id, accountData) {
    const account = await this.accountRepository.findById(id);
    if (!account) return null;

    Object.assign(account, accountData);
    account.totalTrans = (account.totalTrans || 0) + 1;

    return await this.accountRepository.update(id, account);
  }
}