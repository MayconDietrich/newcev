// Buscando elementos dentro da página html
// getElementById busca o elemento pelo ID


// document = variavel de uma instancia de uma classe chamada document

// objeto = instânicas de uma classe


// Buscando pela tag, querySelectorAll retorna sempre um aarray, querySelector rertorna o primeiro elemento que ele encontrar
// const inputs = document.querySelectorAll('input');

// const social = document.querySelector('.social')

// // Pegando elemento pelo índice
// console.log('inputs', inputs[2]);
// console.log('social', social);

  ///////////
 ////crazy//
///////////


// N veículos formam uma class
// classes são identificadas com,letra maiúscula no começo
function Cars(cor, marca, modelo, ano) {
  return {
    cor,
    marca,
    modelo,
    ano
  }
}

const car1 = Cars('verde', 'volks', 'gol', 2010);
const car2 = Cars('azul', 'volks', 'bola', 2020);
const car3 = Cars('vermelho', 'volks', 'sim', 2021);
const car4 = Cars('amarelo', 'volks', 'fusca', 2022);

// console.log('carro1->', car1);
// console.log('carro2->', car2);
// console.log('carro3->', car3);
// console.log('carro4->', car4);

function People(nome, sobrenome, idade) {
  return{
    nome,
    sobrenome,
    idade
  }
}


const poeple1 = People('maycon', 'dietrich', 16);
const poeple2 = People('erick', 'pog', 16);
const poeple3 = People('mathues', '', 16);