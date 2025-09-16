export default class RetirarAccount {
  constructor(accountRepository) {
    this.accountRepository = accountRepository;
  }
  async execute(id, saldo, retirar) {
    saldo = saldo - retirar;
    return await this.userRepository.update(id, saldo);
  }
}