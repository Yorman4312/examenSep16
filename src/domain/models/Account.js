class Account {
  constructor({id, nroCuenta, nombreCliente, saldo, totalTrans}) {
    this.id = id;
    this.nroCuenta = nroCuenta;
    this.nombreCliente = nombreCliente;
    this.saldo = saldo;
    this.totalTrans = totalTrans;
  }
}

export default Account;