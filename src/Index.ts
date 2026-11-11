import { Cachorro } from "./Cachorro.js";
import { Gato } from "./Gato.js";
import { Ave } from "./Ave.js";
import { Veterinario } from "./Veterinario.js";
import { Recepcionista } from "./Recepcionista.js";
import { Consulta } from "./Consulta.js";
import { Clinica } from "./Clinica.js";

const cachorro = new Cachorro("Rex", 3, "João");
const gato = new Gato("Mimi", 2, "Maria");
const ave = new Ave("Louro", 1, "Pedro");

const veterinario = new Veterinario("Carlos", "101", 4000);
const recepcionista = new Recepcionista("Ana", "102", 2000);

veterinario.realizarConsulta();

const consulta = new Consulta(
    cachorro,
    veterinario,
    new Date()
);

recepcionista.agendarAtendimento(true);
recepcionista.agendarAtendimento(true);
recepcionista.agendarAtendimento(false);

const clinica = new Clinica("Clínica da Dona Marta");

clinica.cadastrarAnimal(cachorro);
clinica.cadastrarAnimal(gato);
clinica.cadastrarAnimal(ave);

clinica.adicionarFuncionario(veterinario);
clinica.adicionarFuncionario(recepcionista);

console.log("Clínica:", clinica.getNome());

console.log("Animal:", consulta.getAnimal().getNome());
console.log("Som:", cachorro.emitirSom());
console.log("Cuidados:", cachorro.descreverCuidados());

console.log("Veterinário:", veterinario.getNome());

console.log("Bônus do veterinário:",
    veterinario.calcularBonus(50));

console.log("Bônus da recepcionista:",
    recepcionista.calcularBonus(10));

console.log("Salário do veterinário:",
    veterinario.getSalario());

console.log("Quantidade de animais:",
    clinica.getAnimais().length);

console.log("Quantidade de funcionários:",
    clinica.getFuncionarios().length);
