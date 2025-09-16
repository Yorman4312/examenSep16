export default class GetAccountById {
  constructor(accountRepository) {
    this.accountRepository = accountRepository;
  }
  async execute(id) {
    return await this.accountRepository.findById(id);
  }
}