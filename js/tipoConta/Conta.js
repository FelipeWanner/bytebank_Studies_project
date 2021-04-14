// classe Abstrata (são classes que servem apenas de )
export class Conta {
    constructor(saldoInicial = 0, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

        //esse if verifica em qual classe esse constructor está sendo instanciado, e como não quero que Conta
        // seja instanciada, se constructor for da Conta, ele lança um erro no console.
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar a classe Conta diretamente, pois essa é uma classe abstrata.");
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    //sacar é um metodo abstrato.
    sacar(valor) {

        throw new Error("Esse metodo é abstrato e deve ser sobrescrito na classe filha.");

        //Abaixo exemplo de utilização para sobrescrever a classe:
        // let taxa = 1;
        // return this._sacar(valor, taxa);
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}