export default class CreateAccount {
  constructor(accountRepository) {
    this.accountRepository = accountRepository;
  }

  async execute(accountData) {
    return await this.accountRepository.create(accountData);
  }
}