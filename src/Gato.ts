import { Animal } from "./Animal.js";

export class Gato extends Animal {

    constructor(nome: string, idade: number, tutor: string) {
        super(nome, idade, tutor);
    }

    emitirSom(): string {
        return "Miau!";
    }

    descreverCuidados(): string {
        return "Precisa de um arranhador.";
    }

    usarArranhador(): string {
        return "O gato está usando o arranhador.";
    }
}
