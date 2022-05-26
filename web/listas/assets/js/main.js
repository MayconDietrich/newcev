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


  if(messages.length < 3) {
     // push = método de um vetor, adiciona um elemento no final do array
    messages.push(message);

    // pegando o formulario e utilizando um método de form que é o reset
    document.getElementById('form').reset();
    console.log(message)
    console.log('imprimir vetor', messages);
  }else {
    alert('nao vai n haha')
  }
}

btnSendMsg.addEventListener('click', addMsg)