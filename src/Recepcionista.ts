import { Funcionario } from "./Funcionario.js";

export class Recepcionista extends Funcionario {

    private agendamentosConfirmados: number;

    constructor(nome: string, matricula: string, salario: number) {
        super(nome, matricula, salario);

        this.agendamentosConfirmados = 0;
    }

    agendarAtendimento(confirmado: boolean): void {
        if (confirmado) {
            this.agendamentosConfirmados++;
        }
    }

    calcularBonus(valorPorUnidade: number): number {
        if (valorPorUnidade < 0 ) {
            console.log("Valor de bônus inválido!");
        }

        return this.agendamentosConfirmados * valorPorUnidade;
    }
}
