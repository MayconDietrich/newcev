const modal = document.getElementById('modal');
let edit = false;
let allRegisters = [];
let x = 0;

if(!localStorage.getItem('registers')) {
  localStorage.setItem('registers', allRegisters);
}else {
  allStorage = localStorage.getItem('registers');
}

function onloadAddInfos() {

  let userKey = localStorage.getItem('registers');
  
    allRegisters = userKey ? JSON.parse(userKey) : [];

    let registerActual = localStorage.getItem('registers');
    if(registerActual != '') {
      registerActual = JSON.parse(registerActual);
    }
    for (let x = 0; x < registerActual.length; x++) {
      let objectActual = registerActual[x];
      let infosOnload = {
            name: objectActual.name, 
            surname: objectActual.surname, 
            address: objectActual.address, 
            addressAditional: objectActual.addressAditional,
            phone: objectActual.phone, 
            email: objectActual.email,
            identificator: objectActual.identificator
          };
      addMsgTable(infosOnload, infosOnload.identificator);
    }
}

let infosAdded = onloadAddInfos();
window.onload = infosAdded;
let z=0


function sendMsg() {

  if(edit === true) {
    console.log('mamaozinho');
    return edit = false;
  }
  const form = document.getElementById('form');

  let name = document.getElementById('name').value;
  let surname = document.getElementById('surname').value;
  let address = document.getElementById('address').value;
  let addressAditional = document.getElementById('addressAditional').value;
  let phone = document.getElementById('phone').value;
  let email = document.getElementById('email').value;

  let infos = {
    name: name, 
    surname: surname, 
    address: address, 
    addressAditional: addressAditional,
    phone: phone, 
    email: email,
    identificator: x
  };

    if(name =='' && surname == '' && address == '' && addressAditional == '' && phone == '' && email == '') {
      alert('Cadastro inválido!')
      return;
    }
  allRegisters.push(infos);

  localStorage.setItem('registers', JSON.stringify(allRegisters));
  registerId = infos.identificator;
  addMsgTable(infos, registerId);

  x++;
  form.reset();
  return allRegisters, x;
}

function addMsgTable(infos, registerId) {
  console.log(registerId);

  let tr = document.createElement('tr');
  const tableBody = document.getElementById('table-body');


  const tdName = document.createElement('td');
  const tdSurname = document.createElement('td');
  const tdAddress = document.createElement('td');
  const tdaddressAditional = document.createElement('td');
  const tdPhone = document.createElement('td');
  const tdEmail = document.createElement('td');
  const tdBtns = document.createElement('td');

    iconRemove = document.createElement('i');
    iconRemove.setAttribute('class', 'icon fas fa-trash');
    iconRemove.setAttribute('style', 'cursor:pointer; margin-inline: .2rem;');
    iconRemove.setAttribute('onclick', 'removeRegister(event)');
    tdBtns.appendChild(iconRemove);
  
    iconEdit = document.createElement('i');
    iconEdit.setAttribute('class', 'icon fa-solid fa-pen-to-square');
    iconEdit.setAttribute('style', 'cursor:pointer; margin-inline: .2rem;');
    iconEdit.setAttribute('onclick', 'editRegister(event)');
    tdBtns.appendChild(iconEdit);
  
    tdName.innerHTML = `${infos.name}`;
    tr.appendChild(tdName);
    tdSurname.innerHTML = `${infos.surname}`;
    tr.appendChild(tdSurname);
    tdAddress.innerHTML = `${infos.address}`;
    tr.appendChild(tdAddress);
    tdaddressAditional.innerHTML = `${infos.addressAditional}`;
    tr.appendChild(tdaddressAditional);
    tdPhone.innerHTML = `${infos.phone}`;
    tr.appendChild(tdPhone);
    tdEmail.innerHTML = `${infos.email}`;
    tr.appendChild(tdEmail);
    tdBtns.appendChild(iconRemove);
    tr.appendChild(tdBtns);
  
    tr.setAttribute('id', registerId);
  
    tableBody.appendChild(tr);
    edit = false;
}

function removeRegister(event) {
  const clickedBtn = event.target.parentNode;
  const clickedBtnNode = clickedBtn.parentNode;
  const storage = localStorage.getItem('registers');
  allRegisters = JSON.parse(storage);
  allRegisters.splice(clickedBtnNode.id, 1);
  localStorage.setItem('registers', JSON.stringify(allRegisters));
  clickedBtnNode.remove();
}

function editRegister(event) {
  const clickedBtn = event.target.parentNode;
  const clickedBtnNode = clickedBtn.parentNode;
  const isEditingTr = clickedBtn.parentNode;
  let form = document.getElementById('form');
  let allValues = [];

  

  return edit = true;
}

function openModal() {
  modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById('close').onclick = function() {
  modal.style.display = "none";
}

document.getElementById('changeMode').onclick = function(event) {
  const main = document.getElementById('main');
  const form = document.getElementById('sec-form');
  const btn = document.getElementById('form-btn');
  const iconDark = document.getElementById('dark')
  const iconLight = document.getElementById('light');

  if(event.target.id == 'dark') {
    form.classList.add('colorForm2');
    main.classList.add('bg2');
    btn.classList.add('formBtnColor2');
    iconDark.classList.add('white');
    iconLight.classList.add('white');
  }else {
    form.classList.remove('colorForm2');
    main.classList.remove('bg2');
    btn.classList.remove('formBtnColor2');
    iconDark.classList.remove('white');
    iconLight.classList.remove('white');
  }
}