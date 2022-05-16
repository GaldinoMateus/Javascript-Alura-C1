console.log(`Trabalhando com Condicionais`);


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 15;
const estaAcompanhada = true;

console.log("Destinos Possiveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador Maior de idade");
//     listaDeDestinos.splice(1, 1); //Deletando 2 elementos apartir da posição 1 do Array
// } else if (estaAcompanhada) {
//     console.log("Comprador esta acompanhado");
//     listaDeDestinos.splice(1, 1); //Deletando 2 elementos apartir da posição 1 do Array
// } else {
//     console.log("Comprador Menor de Idade");
// }



if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Comprador Maior de idade ou acompanhado");
    listaDeDestinos.splice(1, 1); //Deletando 2 elementos apartir da posição 1 do Array
} else {
    console.log("Comprador Menor de Idade");
}


console.log(listaDeDestinos);


// console.log(idadeComprador == 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador > 18);