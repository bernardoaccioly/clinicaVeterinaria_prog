import { Animal } from "./Animal.js";

export class Cachorro extends Animal {

    constructor(nome: string, idade: number, tutor: string) {
        super(nome, idade, tutor);
    }

    emitirSom(): string {
        return "Au au!";
    }

    descreverCuidados(): string {
        return "Precisa de passeio diário.";
    }

    passear(): string {
        return "O cachorro está passeando.";
    }
}
