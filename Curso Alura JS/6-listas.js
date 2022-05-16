console.log(`Trabalhando com Listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);


listaDeDestinos.push(`Curitiba`); //Adicionando item a lista 

 

console.log("Destinos Possiveis:");
console.log(listaDeDestinos);


listaDeDestinos.splice(1,2); //Deletando 2 elementos apartir da posição 1 do Array

console.log(listaDeDestinos[0]);
console.log(listaDeDestinos.length);
