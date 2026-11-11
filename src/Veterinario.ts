import { Funcionario } from "./Funcionario.js";

export class Veterinario extends Funcionario {

    private consultasRealizadas: number;

    constructor(nome: string, matricula: string, salario: number) {
        super(nome, matricula, salario);

        this.consultasRealizadas = 0;
    }

    realizarConsulta(): void {
        this.consultasRealizadas++;
    }

    prescreverTratamento(tratamento: string): string {
        return `Tratamento prescrito: ${tratamento}`;
    }

    calcularBonus(valorPorUnidade: number): number {
        if (valorPorUnidade < 0) {
            console.log("Valor de bônus inválido!");
        }

        return this.consultasRealizadas * valorPorUnidade;
    }
}
