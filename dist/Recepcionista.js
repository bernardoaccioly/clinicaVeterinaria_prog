import { Funcionario } from "./Funcionario.js";
export class Recepcionista extends Funcionario {
    agendamentosConfirmados;
    constructor(nome, matricula, salario) {
        super(nome, matricula, salario);
        this.agendamentosConfirmados = 0;
    }
    agendarAtendimento(confirmado) {
        if (confirmado) {
            this.agendamentosConfirmados++;
        }
    }
    calcularBonus(valorPorUnidade) {
        if (valorPorUnidade < 0) {
            console.log("Valor de bônus inválido!");
        }
        return this.agendamentosConfirmados * valorPorUnidade;
    }
}
