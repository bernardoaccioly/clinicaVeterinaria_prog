import { Funcionario } from "./Funcionario.js";
export class Veterinario extends Funcionario {
    consultasRealizadas;
    constructor(nome, matricula, salario) {
        super(nome, matricula, salario);
        this.consultasRealizadas = 0;
    }
    realizarConsulta() {
        this.consultasRealizadas++;
    }
    prescreverTratamento(tratamento) {
        return `Tratamento prescrito: ${tratamento}`;
    }
    calcularBonus(valorPorUnidade) {
        if (valorPorUnidade < 0) {
            console.log("Valor de bônus inválido!");
        }
        return this.consultasRealizadas * valorPorUnidade;
    }
}
