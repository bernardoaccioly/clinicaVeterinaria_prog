export abstract class Funcionario {

    private nome: string;
    private matricula: string;
    private salario: number;

    constructor(nome: string, matricula: string, salario: number) {

        this.nome = nome;
        this.matricula = matricula;
        this.salario = 0;
        this.setSalario(salario);

    }

    getNome(): string {
        return this.nome;
    }

    getMatricula(): string {
        return this.matricula;
    }

    getSalario(): number {
        return this.salario;
    }

    setNome(nome:string):void{
        this.nome = nome
    }

    setIdade(matricula:string):void{
        this.matricula = this.matricula
    }

    setSalario(novoSalario: number): void {
        if (novoSalario <= 0) {
            console.log("Salário inválido!");
        }

        this.salario = novoSalario;
    }

    abstract calcularBonus(valorPorUnidade: number): number;
}
