// Run code only after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-btn'); // Add Task button
  const taskInput = document.getElementById('task-input'); // Input field
  const taskList = document.getElementById('task-list'); // UL element

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim(); // Get input text

    // Check if input is empty
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    // Create new li element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create Remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // Event: Remove task when clicked
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append button to li, then li to taskList
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
  }

  // Event listener for Add Task button
  addButton.addEventListener('click', addTask);

  // Event listener for Enter key
  taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
