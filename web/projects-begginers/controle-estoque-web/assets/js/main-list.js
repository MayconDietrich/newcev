const span = document.getElementById('close-modal');
const modalEdit = document.getElementById('modalEdit');
const modalInventory = document.getElementById('modalInventory');
let inventory = 0;
let edit = false;
dataVehicles = [];

if(!localStorage.getItem('registers')) {
  localStorage.setItem('registers', dataVehicles);
}else {
  let getStorage = localStorage.getItem('registers');
  getStorage = JSON.parse(getStorage);
  dataVehicles = getStorage;
}

window.onload = function onloadAddInfos() {
  dataVehicles.forEach(vehicle => {
    inventory += parseInt(vehicle.inventory);
    addDataTable(vehicle);
  });
}

function addDataTable(data) {
  let tableBody = document.getElementById('tbody');

  let infosVehicles = {
    model: data.model,
    year: data.year,
    brand: data.brand,
    identificator: data.identificator,
    inventory: data.inventory
  }

  if(edit === true) {
    let trEdited = document.getElementById(infosVehicles.identificator);
    trEdited.children[0].innerHTML = infosVehicles.model;
    trEdited.children[1].innerHTML = infosVehicles.year;
    trEdited.children[2].innerHTML = infosVehicles.brand;
    trEdited.children[3].innerHTML = infosVehicles.identificator;
    return edit = false;
  }else {
    let tr = document.createElement('tr');
    let tdModel = document.createElement('td');
    let tdYear = document.createElement('td');
    let tdBrand = document.createElement('td');
    let tdId = document.createElement('td');
    let tdInventory = document.createElement('td');
    let tdIcons = document.createElement('td');
  
    let iconRemove = document.createElement('i');
    iconRemove.setAttribute('class', 'iconTable fas fa-trash');
    iconRemove.setAttribute('onclick', 'removeVechicle(event)');
    iconRemove.setAttribute('title', 'remover veículo');
    tdIcons.appendChild(iconRemove);
  
    let iconEdit = document.createElement('i');
    iconEdit.setAttribute('class', 'iconTable fas fa-pencil-alt');
    iconEdit.setAttribute('onclick', 'editVechicle(event)');
    iconEdit.setAttribute('title', 'editar cadastro');
    tdIcons.appendChild(iconEdit);

    let iconInventory = document.createElement('i');
    iconInventory.setAttribute('class', 'iconTable fas fa-boxes');
    iconInventory.setAttribute('onclick', 'manageInventory(event)');
    iconInventory.setAttribute('title', 'adicionar/remover do estoque');
    tdIcons.appendChild(iconInventory);
  
    tdModel.innerHTML = `${infosVehicles.model}`;
    tr.appendChild(tdModel);
    tdYear.innerHTML = `${infosVehicles.year}`;
    tr.appendChild(tdYear);
    tdBrand.innerHTML = `${infosVehicles.brand}`;
    tr.appendChild(tdBrand);
    tdId.innerHTML = `${infosVehicles.identificator}`;
    tr.appendChild(tdId);
    tdInventory.innerHTML = `${infosVehicles.inventory}`;
    tr.appendChild(tdInventory);
    tr.appendChild(tdIcons);
    tr.setAttribute('id',  `${infosVehicles.identificator}`);
  
    tableBody.appendChild(tr);
  }
}

function removeVechicle(event) {
  let trToRemove = (event.target.parentNode).parentNode;
  dataVehicles.forEach(vehicle => {
    if(vehicle.identificator == trToRemove.id) {
      trToRemove.remove();
      dataVehicles.splice(dataVehicles.indexOf(vehicle), 1);
      localStorage.setItem('registers', JSON.stringify(dataVehicles));
      return dataVehicles;
    }
  });
}

function editVechicle(event) {
  let trToEdit = (event.target.parentNode).parentNode;
  modalEdit.style.display = "block";
  let dataVehicle = JSON.parse(localStorage.getItem('registers'));

  let model = document.getElementById('model-list');
  let year = document.getElementById('year-list');
  let brand = document.getElementById('brand-list');

  dataVehicle.forEach(vehicle => {
    if(vehicle.identificator == trToEdit.id) {
      model.value = vehicle.model;
      year.value = vehicle.year;
      brand.value = vehicle.brand;
    }
  });

  document.getElementById('sendEdit').addEventListener('click', function(event) {
    dataVehicle.forEach(addFormStorage); 

    function addFormStorage(vehicle, index, dataVehicle) {
      if(vehicle.identificator == trToEdit.id) {
        dataVehicle[index].model = model.value;
        dataVehicle[index].year = year.value;
        dataVehicle[index].brand = brand.value;
        localStorage.setItem('registers', JSON.stringify(dataVehicle));
        edit = true;
        addDataTable(dataVehicle[index]);
      }
    }
    modalEdit.style.display = "none";
  });
}

function manageInventory(event) {
  let dataVehicle = JSON.parse(localStorage.getItem('registers'));
  let trToManage = (event.target.parentNode).parentNode;
  modalInventory.style.display = 'block';
  let inventoryInput = document.getElementById('inventory-list');
  dataVehicle.forEach(vehicle => {
    if(vehicle.identificator == trToManage.id) {
      inventoryInput.value = vehicle.inventory
    }
  });

  document.getElementById('sendInventory').addEventListener('click', (event) => {
    dataVehicle.forEach(addInventory);

    function addInventory(vehicle, index, dataVehicle) {
      if(vehicle.identificator == trToManage.id) {
        dataVehicle[index].inventory = inventoryInput.value
        localStorage.setItem('registers', JSON.stringify(dataVehicle));
        modalInventory.style.display = "none";
        let trManaged = document.getElementById(dataVehicle[index].identificator);
        trManaged.children[4].innerHTML = inventoryInput.value;

        if(inventoryInput.value > dataVehicle[index].identificator) {
          return inventory = inventory - dataVehicle[index].identificator;
        }
      }
    }
  });
}

span.onclick = function hideModal() {
  modalEdit.style.display = "none";
}

function hideModal() {
  modalInventory.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalEdit || event.target == modalInventory) {
    modalEdit.style.display = "none";
    modalInventory.style.display = "none";
  }
}

window.addEventListener('keydown', function(event) {
  if(event.keyCode == 27) {
    modalEdit.style.display = "none";
    modalInventory.style.display = "none";
  }
})