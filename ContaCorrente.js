import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor(cliente, agencia) {
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    // sobrescreve o sacar() de Conta
    sacar(valor) {
        const taxa = 1.1;
        return this._sacar(valor, taxa);  // também poderia ser usado super._sacar
    }

    teste() {
        super.teste();
        console.log('Teste na classe Conta Corrente');
    }
}