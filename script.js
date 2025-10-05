// Run code only after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-btn'); // "Add Task" button
  const taskInput = document.getElementById('task-input'); // Task input field
  const taskList = document.getElementById('task-list'); // UL element to display tasks

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim(); // Get and trim input text

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

    // Remove task when "Remove" button is clicked
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append the remove button to li, then append li to taskList
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
  }

  // Event listener: click on "Add Task" button
  addButton.addEventListener('click', addTask);

  // Event listener: press "Enter" key inside input field
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Invoke addTask once on page load (as required by ALX)
  addTask();
});
