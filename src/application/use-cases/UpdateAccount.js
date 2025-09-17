export default class UpdateAccount {
  constructor(accountRepository) {
    this.accountRepository = accountRepository;
  }

  async execute(id, accountData) {
    return await this.accountRepository.update(id, accountData);
  }
}