export class Animal {
    nome;
    idade;
    tutor;
    constructor(nome, idade, tutor) {
        this.nome = nome;
        this.idade = idade;
        this.tutor = tutor;
    }
    getNome() {
        return this.nome;
    }
    getIdade() {
        return this.idade;
    }
    getTutor() {
        return this.tutor;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    setTutor(tutor) {
        this.tutor = tutor;
    }
}
