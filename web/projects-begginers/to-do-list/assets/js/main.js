const btnSend = document.getElementById('send');
let allTasks = [];

btnSend.addEventListener('click', function() {
  let task = document.getElementById('task').value;
  let morningList = document.getElementById('morning');
  let afternoonList = document.getElementById('afternoon');
  let nightList = document.getElementById('night');
  let morningCheck = document.getElementById('morningCheck');
  let afternoonCheck = document.getElementById('afternoomCheck');
  let nightCheck = document.getElementById('nightCheck');

  if(morningCheck.checked ) {
    console.log('manha');



  }else if(afternoonCheck.checked) {
    console.log('tarde')
  }else if(nightCheck.checked) {
    console.log('noite')
  }
})