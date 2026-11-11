import { Animal } from "./Animal.js";

export class Ave extends Animal {

    constructor(nome: string, idade: number, tutor: string) {
        super(nome, idade, tutor);
    }

    emitirSom(): string {
        return "Piu piu!";
    }

    descreverCuidados(): string {
        return "Precisa de uma gaiola adequada.";
    }

    usarGaiola(): string {
        return "A ave está em sua gaiola.";
    }
}
