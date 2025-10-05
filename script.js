document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  // 'save' determines whether to save to Local Storage
  function addTask(taskText, save = true) {
    // If taskText is not provided (from input), get it
    if (taskText === undefined) {
      taskText = taskInput.value.trim();
    }

    // Check if input is empty
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    // Create new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create "Remove" button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // Remove task from DOM and Local Storage when clicked
    removeBtn.onclick = function () {
      taskList.removeChild(li);
      removeTaskFromStorage(taskText);
    };

    // Append the remove button to li, then li to taskList
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";

    // Save to Local Storage if needed
    if (save) {
      saveTaskToStorage(taskText);
    }
  }

  // Save a task to Local Storage
  function saveTaskToStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }

  // Remove a task from Local Storage
  function removeTaskFromStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }

  // Load tasks from Local Storage and render them
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' prevents duplicate save
  }

  // Event listener: click on "Add Task" button
  addButton.addEventListener('click', () => addTask());

  // Event listener: press "Enter" key inside input field
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Load tasks from Local Storage on page load
  loadTasks();
});
