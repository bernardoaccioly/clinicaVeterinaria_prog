import { Animal } from "./Animal.js";
export class Ave extends Animal {
    constructor(nome, idade, tutor) {
        super(nome, idade, tutor);
    }
    emitirSom() {
        return "Piu piu!";
    }
    descreverCuidados() {
        return "Precisa de uma gaiola adequada.";
    }
    usarGaiola() {
        return "A ave está em sua gaiola.";
    }
}
