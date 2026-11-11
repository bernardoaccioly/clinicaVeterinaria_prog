import { Animal } from "./Animal.js";
import { Funcionario } from "./Funcionario.js";

export class Clinica {

    private nome: string;
    private animais: Animal[];
    private funcionarios: Funcionario[];

    constructor(nome: string) {

        this.nome = nome;
        this.animais = [];
        this.funcionarios = [];
    }

    cadastrarAnimal(animal: Animal): void {
        this.animais.push(animal);
    }

    adicionarFuncionario(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
    }

    getNome(): string {
        return this.nome;
    }

    getAnimais(): Animal[] {
        return [...this.animais];
    }

    getFuncionarios(): Funcionario[] {
        return [...this.funcionarios];
    }
}
