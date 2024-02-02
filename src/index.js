document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const tasksList = document.getElementById("tasks-list");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskDescription = taskInput.value;

    if (taskDescription) {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;
      taskItem.style.backgroundColor = "yellow";
      tasksList.appendChild(taskItem);
      taskInput.value = ""; // Clear the input field
    }
  });
});