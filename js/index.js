import{Cliente} from "./Cliente.js";
import{ContaCorrente} from "./ContaCorrente.js";
import{ContaPoupanca} from "./ContaPoupanca.js";

const conta1 = new ContaCorrente(12, new Cliente("Ricardo",11122233309),1001);

const conta2 = new ContaCorrente(0, new Cliente("Alice",88822233309),1001);

const contaPoupanca = new ContaPoupanca(20, conta1._cliente, conta1._agencia);

conta1.depositar(500);
conta1.transferir(250, conta2);
conta2.depositar(350.25);

console.log(conta1);
console.log(conta2);
console.log(contaPoupanca);
console.log(conta1.sacar(200).toFixed(2));
console.log(contaPoupanca.sacar(10));