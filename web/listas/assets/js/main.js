// Buscando elementos dentro da página html
// getElementById busca o elemento pelo ID

// Buscando pela tag, querySelectorAll retorna sempre um aarray, querySelector rertorna o primeiro elemento que ele encontrar
// const inputs = document.querySelectorAll('input');

// const social = document.querySelector('.social')

// // Pegando elemento pelo índice
// console.log('inputs', inputs[2]);
// console.log('social', social);

  ///////////
 ////crazy//
///////////


const btnSendMsg = document.getElementById('btn-send-msg');

const messages = [];

function addMsg(event) {
  event.preventDefault();

  const inputNameValue = document.getElementById('name').value;
  const inputEmailValue = document.getElementById('email').value;
  const inputMsgValue = document.getElementById('msg').value;

  console.log(inputNameValue, inputEmailValue, inputMsgValue);

  const message = {
    name: inputNameValue,
    email: inputEmailValue,
    message: inputMsgValue
  }


  // push adiciona um elemento no final do array
  messages.push(message);

  document.getElementById('form').reset();
  console.log(message)
  console.log('imprimir vetor', messages);
}




btnSendMsg.addEventListener('click', addMsg)