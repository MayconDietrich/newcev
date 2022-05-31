const btnAddMsg = document.getElementById('addBtn');
console.log(btnAddMsg);

let countRow = 0;

function onClickEdit(idRecord) {
  console.log('mamaozinho', idRecord);
}

function addMsg(event) {
  event.preventDefault();
  const form = document.getElementById('form-message');
  const table = document.getElementById('table');
  const tableBody = document.getElementById('table-body');

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

  const tdFrom = document.createElement('td');
  const tdTo = document.createElement('td');
  const tdMsg = document.createElement('td');
  const tdBtns = document.createElement('td')
  const tr = document.createElement('tr');

  const iconRemove = document.createElement('i');
  iconRemove.setAttribute('class', 'icon fas fa-trash');
  iconRemove.setAttribute('style', 'cursor:pointer');
  tdBtns.appendChild(iconRemove);

  const iconEdit = document.createElement('i');
  iconEdit.setAttribute('class', 'icon fa-solid fa-pencil');
  iconEdit.setAttribute('style', 'cursor:pointer');
  tdBtns.appendChild(iconEdit);



  tdFrom.innerHTML = `${message.from}`;
  tr.appendChild(tdFrom);
  tdTo.innerHTML = `${message.to}`;
  tr.appendChild(tdTo);
  tdMsg.innerHTML = `${message.message}`;
  tr.appendChild(tdMsg);

  tr.appendChild(tdBtns);



  tr.setAttribute('id', countRow);
  tableBody.appendChild(tr);
  countRow++;

  iconEdit.setAttribute('onclick', `onClickEdit(${tdBtns.parentElement.id});`);
  console.log('ID: ', tdBtns.parentElement.id);

}

btnAddMsg.addEventListener('click', addMsg);