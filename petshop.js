let pets = [{nome:'Dog Inho'},{nome:'Dog Ão'},{nome:'Tulipa'}];
//let pets = [];

const listarPets = () => {
    let conteudo = "";
    for(let pet of pets){
        conteudo += 
            `------------------\n`+
            `Nome: ${pet.nome}\n`+
            `------------------\n`;
    }
    return conteudo;
};

const adicionarPet = (novoPet) => {
    return pets.push(novoPet);
};

const buscarPet = (nomePet) => {
    let pet = pets.filter(pet => pet.nome == nomePet);
    return pet.length > 0 ? pet : `Nenhum pet foi encontrado com o nome '${nomePet}'!`;
};

module.exports = { listarPets, adicionarPet, buscarPet }