const btnAddMsg = document.getElementById('addBtn');
let countRow = 0;

let editCheck = false;
let removeUndo = '';
let editId = '';


function onClickEdit(lineEditing) {
  const tBody = document.getElementById('table-body');  
  console.log('Line Editing', lineEditing.childNodes);

  // ForEach é o método que percorre todos os elementos de um vetor
  // lineEditing.childNodes.forEach((element, index) => {
  //   console.log('elemento:', element);
  //   console.log('index:', index);
  // })

  ///////////forma menos pog/////////////////////
  // const fromValue = lineEditing.childNodes[0].innerHTML;
  // const toValue = lineEditing.childNodes[1].innerHTML;
  // const message = lineEditing.childNodes[2].innerHTML;

  // Desestruturação de arrays - método mais poggers
  const [fromValue, toValue, message] = lineEditing.childNodes;
  console.log('fromValue:', fromValue.innerHTML);
  console.log('toValue:', toValue.innerHTML);
  console.log('message:', message.innerHTML);

  editId = lineEditing.id;

  document.getElementById('from').value = fromValue.innerHTML;
  document.getElementById('to').value = toValue.innerHTML;
  document.getElementById('message').innerHTML = message.innerHTML;
  editCheck = true;
}

function onClickRemove(lineEditing) {
  removeUndo = lineEditing;
  lineEditing.remove();
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
  iconRemove.setAttribute('style', 'cursor:pointer; margin-inline: 1rem;');
  tdBtns.appendChild(iconRemove);

  const iconEdit = document.createElement('i');
  iconEdit.setAttribute('class', 'icon fa-solid fa-pencil');
  iconEdit.setAttribute('style', 'cursor:pointer; margin-inline: 1rem;');
  tdBtns.appendChild(iconEdit);

  const arrowUp = document.createElement('i');
  arrowUp.setAttribute('class', 'icon fa-solid fa-arrow-up');
  arrowUp.setAttribute('style', 'cursor:pointer');
  arrowUp.setAttribute('title', 'mover acima');
  tdBtns.appendChild(arrowUp);

  const arrowDown = document.createElement('i');
  arrowDown.setAttribute('class', 'icon fa-solid fa-arrow-down');
  arrowDown.setAttribute('style', 'cursor:pointer; margin-inline: 1rem;');
  arrowDown.setAttribute('title', 'mover acima');
  tdBtns.appendChild(arrowDown);


  if(editCheck == true) {
    console.log('mamaozinho');
    console.log(editId)

    const trEdit = document.getElementById(editId);
    console.log(trEdit);

    trEdit.firstChild.innerHTML = message.from;
    trEdit.children[1].innerHTML = message.to;
    trEdit.children[2].innerHTML = message.message;

    editCheck = false;

  }else {
    tdFrom.innerHTML = `${message.from}`;
    tr.appendChild(tdFrom);
    tdTo.innerHTML = `${message.to}`;
    tr.appendChild(tdTo);
    tdMsg.innerHTML = `${message.message}`;
    tr.appendChild(tdMsg);
  
    tr.appendChild(tdBtns);
  
    tr.setAttribute('id', `line${countRow}`);
    tableBody.appendChild(tr);
    countRow++;
  
    iconEdit.setAttribute('onclick', `onClickEdit(${tdBtns.parentElement.id});`);
    iconRemove.setAttribute('onclick', `onClickRemove(${tdBtns.parentElement.id});`);
    console.log('ID: ', tdBtns.parentElement.id);
  }
  document.getElementById('form-message').reset();
}

btnAddMsg.addEventListener('click', addMsg);

const btnUndo = document.getElementById('undo');

btnUndo.addEventListener('click', function() {
  const tableBody = document.getElementById('table-body');
  tableBody.appendChild(removeUndo);
    
})