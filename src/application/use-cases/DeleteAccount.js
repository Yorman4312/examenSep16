export default class DeleteAccount {
  constructor(accountRepository) {
    this.accountRepository = accountRepository;
  }
  async execute(id) {
    return await this.accountRepository.delete(id);
  }
}