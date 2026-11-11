export abstract class Animal {

    private nome: string;
    private idade: number;
    private tutor: string;

    constructor(nome: string, idade: number, tutor: string) {

        this.nome = nome;
        this.idade = idade;
        this.tutor = tutor;

    }

    getNome(): string {
        return this.nome;
    }

    getIdade(): number {
        return this.idade;
    }

    getTutor(): string {
        return this.tutor;
    }

    setNome(nome:string):void{
        this.nome = nome
    }

    setIdade(idade:number):void{
        this.idade = idade
    }

    setTutor(tutor:string):void{
        this.tutor = tutor
    }
    
    abstract emitirSom(): string;

    abstract descreverCuidados(): string;
}
