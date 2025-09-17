class Account {
  constructor({id, nroCuenta, nombreCliente, saldo, totalTrans, consignar, retirar}) {
    this.id = id;
    this.nroCuenta = nroCuenta;
    this.nombreCliente = nombreCliente;
    this.saldo = saldo;
    this.totalTrans = totalTrans;
    this.consignar = consignar;
    this.retirar = retirar;
  }
}

export default Account;