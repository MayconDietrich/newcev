let dataVehicles = [];
let spanRegister = document.getElementById('spanRegister');

window.onload = function onloadGetStorage() {
  if(!localStorage.getItem('registers')) {
    localStorage.setItem('registers', dataVehicles);
  }else {
    let getStorage = localStorage.getItem('registers');
    getStorage = JSON.parse(getStorage);
    dataVehicles = getStorage;
    spanRegister.innerHTML = dataVehicles.length;
  }
}

document.getElementById('btnSendForm').addEventListener('click', function(event) {
  let identificator = 0;
  if(dataVehicles.length > 0) {
    dataVehicles.forEach(vehicle => {
      if(vehicle.identificator == identificator) {
        identificator++;
      }
    });
  }
  const form = event.target.parentNode;

  let model = document.getElementById('model').value;
  let year = document.getElementById('year').value;
  let brand = document.getElementById('brand').value;

  let formDataVehicles = {
    model: model,
    year: year,
    brand: brand,
    identificator: identificator,
    inventory: 0
  }

  dataVehicles.push(formDataVehicles);

  localStorage.setItem('registers', JSON.stringify(dataVehicles));
  spanRegister.innerHTML = dataVehicles.length;
  form.reset();
});