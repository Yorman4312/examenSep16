export default class ConsignarAccount {
  constructor(accountRepository) {
    this.accountRepository = accountRepository;
  }
  async execute(id, saldo, consignar) {
    saldo = saldo + consignar;
    return await this.userRepository.update(id, saldo);
  }
}