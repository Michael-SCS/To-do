// Select necessary DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim(); // Get and trim the task input value

    if (taskText !== '') { // Ensure task is not empty
        const li = document.createElement('li'); // Create new list item

        li.innerHTML = `
            ${taskText}
            <button class="delete-btn">Delete</button>
        `;

        taskList.appendChild(li); // Add the new task to the task list
        taskInput.value = ''; // Clear the input field
    }
}

// Function to delete a task
function deleteTask(event) {
    if (event.target.classList.contains('delete-btn')) {
        const li = event.target.parentElement;
        taskList.removeChild(li);
    }
}

// Event listener for adding a task
addTaskBtn.addEventListener('click', addTask);

// Event listener for deleting a task
taskList.addEventListener('click', deleteTask);
