import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    
    static numeroDeContas = 0;

    constructor(saldo, cliente, agencia){
        super(saldo, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }
    

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    //esse metodo está sobreescrevendo o metodo de mesmo nome da classe mae(Conta). Mas continua retornando 
    //um metodo privado (_sacar) normalmente.
    sacar(valor) {
        let taxa = 1.1;
        return super._sacar(valor, taxa);
    }
}