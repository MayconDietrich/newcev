let filter = false;
let allTasks = [];
let list = document.getElementById('list');
if(!localStorage.getItem('allTasks')) {
  localStorage.setItem('allTasks', JSON.stringify(allTasks));
}

window.onload = function() {
  allTasks = JSON.parse(localStorage.getItem('allTasks'));
  allTasks.forEach(function(task) {
    addTask(task);
  });
};

document.getElementById('btnSendTask').addEventListener('click', function(event) {
  event.preventDefault();

  let inputTask = document.getElementById('task');
  if(inputTask.value == '' || inputTask.value == ' ') {
    alert('A tarefa não pode ser vazia!');
    return;
  }

  let taskObj = {
    task: inputTask.value,
    complete: false
  }
  
  addTask(taskObj);

  allTasks.push(taskObj);
  localStorage.setItem('allTasks', JSON.stringify(allTasks))
  inputTask.value = '';
});

function addTask(taskStorage) {
  let checkbox = document.createElement('input');
  let liTask = document.createElement('li');
  let iconRemove = document.createElement('i');

  iconRemove.setAttribute('class', 'fa-solid fa-trash');
  iconRemove.setAttribute('onclick', 'removeTask(this)');
  liTask.setAttribute('class', 'list-item')
  iconRemove.style.cursor = 'pointer'
  checkbox.type = 'checkbox';
  checkbox.setAttribute('onclick', 'completeTask(this)');
  liTask.innerHTML = taskStorage.task;
  liTask.appendChild(checkbox);
  liTask.appendChild(iconRemove);
  if(taskStorage.complete === true) {
    liTask.classList.add('risk');
    checkbox.checked = true;
  }
  list.appendChild(liTask);
}

function completeTask(input) {
  list = input.parentNode;
  list.classList.add('risk');
  allTasks.forEach(completeTaskStorage);
  function completeTaskStorage(task, index) {
    if(task.task == list.textContent) {
      task.complete = true;
      localStorage.setItem('allTasks', JSON.stringify(allTasks));
    }
  };
}

function removeTask(itemToRemove)  {
  let li = itemToRemove.parentNode;
  list.removeChild(li);
  allTasks.forEach(removeStorage);
  function removeStorage(task, index) {
    if(task.task == li.textContent) {
      allTasks.splice(index, 1);
      localStorage.setItem('allTasks', JSON.stringify(allTasks));
    }
  }
}