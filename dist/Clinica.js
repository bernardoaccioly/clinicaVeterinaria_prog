export class Clinica {
    nome;
    animais;
    funcionarios;
    constructor(nome) {
        this.nome = nome;
        this.animais = [];
        this.funcionarios = [];
    }
    cadastrarAnimal(animal) {
        this.animais.push(animal);
    }
    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }
    getNome() {
        return this.nome;
    }
    getAnimais() {
        return [...this.animais];
    }
    getFuncionarios() {
        return [...this.funcionarios];
    }
}
