const modal = document.getElementById('modal');
let edit = false;
let allRegisters = [];
function onloadAddInfos() {
  x=0;
  let recordOnload = 'record' + x;
  let recordActual = localStorage.getItem(recordOnload);


  var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.key(keys[i]) );
    }

    for (let x = 0; x < values.length; x++) {
      recordOnload = keys[x];
      // console.log(recordOnload);
      recordActual = JSON.parse(localStorage.getItem(recordOnload));

      let infosOnload = {
            name: recordActual.name, 
            surname: recordActual.surname, 
            address: recordActual.address, 
            addressAditional: recordActual.addressAditional,
            phone: recordActual.phone, 
            email: recordActual.email
          };

      addMsgTable(infosOnload, recordOnload);
    }

    //////código bugado feioso////////
  // while(localStorage.getItem(recordOnload)) {
  //   while(!localStorage.getItem(recordOnload)) {
  //     x++;
  //     recordOnload = 'record' + x;
  //   }
  //   recordActual = localStorage.getItem(recordOnload);
  //   recordActual = JSON.parse(recordActual);
    
  //   let infosOnload = {
  //     name: recordActual.name, 
  //     surname: recordActual.surname, 
  //     address: recordActual.address, 
  //     addressAditional: recordActual.addressAditional,
  //     phone: recordActual.phone, 
  //     email: recordActual.email
  //   };
  //   console.log(infosOnload);

  //   addMsgTable(infosOnload, recordOnload)
    
  //   x++;
  //   recordOnload = 'record' + x;
  //   recordActual = localStorage.getItem(recordOnload);
  // }
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

  let recordName = 'record' + x;
  while(localStorage.getItem(recordName)) {
    x++;
    recordName = 'record' + x;
  }
  // console.log('record name: ', recordName.value)

  localStorage.setItem(recordName, JSON.stringify(infos));

  addMsgTable(infos, recordName);

  form.reset();
  x++;
  edit = false;
}

function addMsgTable(infos, recordName) {
  // console.log(infos);
  const tableBody = document.getElementById('table-body');

  const tr = document.createElement('tr');

  const tdName = document.createElement('td');
  const tdSurname = document.createElement('td');
  const tdAddress = document.createElement('td');
  const tdaddressAditional = document.createElement('td');
  const tdPhone = document.createElement('td');
  const tdEmail = document.createElement('td');
  const tdBtns = document.createElement('td');

  if(edit == true) {
    console.log(infos, recordName);
    let trEdited = document.getElementById(recordName);
    console.log(trEdited);
  }else {
    
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
  
    tr.setAttribute('id', recordName);
  
    tableBody.appendChild(tr);
  }
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
  edit = true;
  let form = document.getElementById('form');
  
  form.children[1].value   = clickedBtnNode.children[0].innerHTML;
  form.children[3].value   = clickedBtnNode.children[1].innerHTML;
  form.children[5].value   = clickedBtnNode.children[2].innerHTML;
  form.children[7].value   = clickedBtnNode.children[3].innerHTML;
  form.children[9].value   = clickedBtnNode.children[4].innerHTML;
  form.children[11].value   = clickedBtnNode.children[5].innerHTML;
  modal.style.display = "none";

  console.log('pqp funcina desgraça: ', clickedBtnNode.id);

  addMsgTable(clickedBtnNode, clickedBtnNode.id);
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