const btnAddMsg = document.getElementById('addBtn');
console.log(btnAddMsg);

function addMsg(event) {
  event.preventDefault();
  const form = document.getElementById('form-message');

  const inputFrom = document.getElementById('from');
  const inputTo = document.getElementById('to');
  const textearea = document.getElementById('message');

  // o trim remove espaços em branco do começo e do fim
  inputFrom.value = inputFrom.value.trim();
  inputTo.value = inputTo.value.trim();
  textearea.value = textearea.value.trim();

  if(!inputFrom.value.length) {
    alert('O remetente deve ser inserido')
    return;
  }
  if(!inputTo.value.length) {
    alert('O destinatário deve ser inserido')
    return;
  }
  if(!textearea.value.length) {
    alert('A mensagem deve ser inserida')
    return;
  }

  const message = {
    from: inputFrom.value,
    to: inputTo.value,
    message: textearea.value
  }
  console.log(message);
  form.reset();

  const sectionMsg = document.getElementById('section-messages');
  // buscamos uma lista não ordenada dentro da sessão para validarmos se existe ou não, se não existir, criamos ela
  let ul = sectionMsg.querySelector('ul');
  // código da validação
  if (!ul) {
    ul = document.createElement('ul');
    // adiciona dentro da sessão
    sectionMsg.appendChild(ul);
  }

  const li = document.createElement('li');
  li.innerHTML = `De: ${message.from} Para: ${message.to} Mensagem ${message.message}`;
  ul.appendChild(li);

}

btnAddMsg.addEventListener('click', addMsg);