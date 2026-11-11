export class Consulta {
    animal;
    veterinario;
    data;
    constructor(animal, veterinario, data) {
        this.animal = animal;
        this.veterinario = veterinario;
        this.data = data;
    }
    getAnimal() {
        return this.animal;
    }
    getVeterinario() {
        return this.veterinario;
    }
    getData() {
        return this.data;
    }
}
