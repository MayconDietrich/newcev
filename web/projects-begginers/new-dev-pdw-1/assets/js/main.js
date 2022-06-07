const modal = document.getElementById('modal');
let edit = false;
let allRegisters = [];
function onloadAddInfos() {
  x=0;
  let registerOnload = 'register' + x;
  let registerActual = localStorage.getItem(registerOnload);


  var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.key(keys[i]) );
    }

    for (let x = 0; x < values.length; x++) {
      registerOnload = keys[x];
      // console.log(registerOnload);
      registerActual = JSON.parse(localStorage.getItem(registerOnload));

      let infosOnload = {
            name: registerActual.name, 
            surname: registerActual.surname, 
            address: registerActual.address, 
            addressAditional: registerActual.addressAditional,
            phone: registerActual.phone, 
            email: registerActual.email
          };
      addMsgTable(infosOnload, registerOnload);
    }
}

let infosAdded = onloadAddInfos();

window.onload = infosAdded;

function sendMsg() {
  x = 0;  
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
    email: email
  };

  let registerName = 'register' + x;
  while(localStorage.getItem(registerName)) {
    x++;
    registerName = 'register' + x;
  }
  // console.log('register name: ', registerName.value)

  localStorage.setItem(registerName, JSON.stringify(infos));

  addMsgTable(infos, registerName);

  form.reset();
  x++;
}

function addMsgTable(infos, registerName) {
  console.log(registerName);

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
  
    tr.setAttribute('id', registerName);
  
    tableBody.appendChild(tr);
    edit = false;
}

function removeRegister(event) {
  const clickedBtn = event.target.parentNode;
  const clickedBtnNode = clickedBtn.parentNode;
  clickedBtnNode.remove();
  localStorage.removeItem(clickedBtnNode.id);
}

function editRegister(event) {
  const clickedBtn = event.target.parentNode;
  const clickedBtnNode = clickedBtn.parentNode;
  const isEditingTr = clickedBtn.parentNode;
  let form = document.getElementById('form');
  let allValues = [];

  for(i=0; i<=5; i++) {
    allValues[i] = clickedBtnNode.children[i].innerHTML;
    console.log(allValues[i]);
    isEditingTr[i] = allValues[i];
  }
  
  form.children[1].value = clickedBtnNode.children[0].innerHTML;
  form.children[3].value = clickedBtnNode.children[1].innerHTML;
  form.children[5].value = clickedBtnNode.children[2].innerHTML;
  form.children[7].value = clickedBtnNode.children[3].innerHTML;
  form.children[9].value = clickedBtnNode.children[4].innerHTML;
  form.children[11].value = clickedBtnNode.children[5].innerHTML;
  modal.style.display = "none";

  clickedBtnNode.remove();
  localStorage.removeItem(clickedBtnNode.id);
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

  if(event.target.id == 'dark') {
    form.classList.add('colorForm2');
    main.classList.add('bg2');
    btn.classList.add('formBtnColor2');
  }else {
    form.classList.remove('colorForm2');
    main.classList.remove('bg2');
    btn.classList.remove('formBtnColor2');
  }
}