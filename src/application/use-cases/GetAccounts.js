export default class GetAccounts {
  constructor(accountRepository) {
    this.accountRepository = accountRepository;
  }
  async execute() {
    return await this.accountRepository.findAll();
  }
}