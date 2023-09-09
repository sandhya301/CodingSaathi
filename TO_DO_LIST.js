const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

addButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
      <input type="checkbox">
      <span>${taskText}</span>
      <button class="delete-button">Delete</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
});

taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-button')) {
    event.target.parentElement.remove();
  }
  else if (event.target.type === 'checkbox') {
      const taskItem = event.target.parentElement;
      if (event.target.checked) {
        taskItem.classList.add('completed');
        taskList.appendChild(taskItem);
      } else {
        taskItem.classList.remove('completed');
        taskList.insertBefore(taskItem, taskList.firstChild);
      }
  }
});