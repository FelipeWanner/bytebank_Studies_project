import{Cliente} from "./Cliente.js";
import{ContaCorrente} from "./ContaCorrente.js";

const conta1 = new ContaCorrente(1001, new Cliente("Ricardo",11122233309));
conta1.depositar(500);

const conta2 = new ContaCorrente(1001, new Cliente("Alice",88822233309));
conta2.depositar(350.25);

conta1.transferir(250, conta2);
console.log(conta2);
console.log(conta1);
console.log(ContaCorrente.numeroDeContas);
