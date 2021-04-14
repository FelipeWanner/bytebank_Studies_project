import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
    constructor(saldo, cliente, agencia){
        super(saldo, cliente, agencia);
    }

    sacar(valor){
        let taxa = 1.01;
        return this._sacar(valor, taxa);
        //return super._sacar(valor, taxa);   Também é uma opçao válida, super irá invocar o metodo _sacar,
        //enquanto o this irá invocar o _sacar da classe mãe.
    }
}