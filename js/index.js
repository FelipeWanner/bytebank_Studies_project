import{Cliente} from "./Cliente.js";
import{ContaCorrente} from "./tipoConta/ContaCorrente.js";
import{ContaPoupanca} from "./tipoConta/ContaPoupanca.js";
import { ContaSalario } from "./tipoConta/ContaSalario.js";

const conta1 = new ContaCorrente(12, new Cliente("Ricardo",11122233309),1001);

const conta2 = new ContaCorrente(0, new Cliente("Alice",88822233309),1001);

const contaPoupancaRicardo = new ContaPoupanca(20, conta1._cliente, conta1._agencia);

const contaSalarioAlice = new ContaSalario(0, conta2._cliente, conta2._agencia);

conta1.depositar(500);
conta1.transferir(250, conta2);
conta2.depositar(350.25);

console.log(conta1);
console.log(conta2);
console.log(contaPoupancaRicardo);
console.log(contaSalarioAlice);
console.log(conta1.sacar(200).toFixed(2));
console.log(contaPoupancaRicardo.sacar(10));
