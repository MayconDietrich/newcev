// javascript: uma linguagem de programação

// POO: Programação orientada a objetos
// Atributos e métodos(funções)

// Exemplo de atributos: cor, altura, largura, etc.
// Exemplo de métodos/funções: freiar, acelerar, virar a direita

// A conveção da declaração de variável deve ser seguida
// Variável não pode iniciar com números
// Variável não pode iniciar com caracteres especiais(*, &, %, etc.)
// Variável não pode inicia com maiúscula: Banana, correto: banana
// Variáveis devem possuír um valor semântico (fazer sentido)
// Variável não pode ter acento


const NUMERO = 0;//constante global --> convenção

// Funções devem seguir as mesmas convenções e devem ter valor semântico

const folhaDePapel =  {
  color: 'branco',
  tamanho: 'a4'
}

//  Exemplos

let nomeVariavel = 1;
let username = 'Maycon';


// Primeiro método de criar uma função
let somaValores = function () {
  console.log('soma');
}

// Chamar/invocar/conjurar/sumonar/acionar/spawnar a variável

somaValores();

// Named funtion

function subtraiValores() {
  console.log('subtrai')
}

subtraiValores()

// 3° método 

const carro = {
  cor: 'rosa', //atributo
  andar: function () { //método
    console.log('andando')
  }
}

carro.andar();//chamando

// arrow functions 3° método

const multiplicaValores = () => {
  console.log('multiplicar valores', multiplicaValores)
}

multiplicaValores();


