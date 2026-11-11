import { Animal } from "./Animal.js";
export class Cachorro extends Animal {
    constructor(nome, idade, tutor) {
        super(nome, idade, tutor);
    }
    emitirSom() {
        return "Au au!";
    }
    descreverCuidados() {
        return "Precisa de passeio diário.";
    }
    passear() {
        return "O cachorro está passeando.";
    }
}
