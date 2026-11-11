export class Funcionario {
    nome;
    matricula;
    salario;
    constructor(nome, matricula, salario) {
        this.nome = nome;
        this.matricula = matricula;
        this.salario = 0;
        this.setSalario(salario);
    }
    getNome() {
        return this.nome;
    }
    getMatricula() {
        return this.matricula;
    }
    getSalario() {
        return this.salario;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setIdade(matricula) {
        this.matricula = this.matricula;
    }
    setSalario(novoSalario) {
        if (novoSalario <= 0) {
            console.log("Salário inválido!");
        }
        this.salario = novoSalario;
    }
}
