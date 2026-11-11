import { Animal } from "./Animal.js";
export class Gato extends Animal {
    constructor(nome, idade, tutor) {
        super(nome, idade, tutor);
    }
    emitirSom() {
        return "Miau!";
    }
    descreverCuidados() {
        return "Precisa de um arranhador.";
    }
    usarArranhador() {
        return "O gato está usando o arranhador.";
    }
}
