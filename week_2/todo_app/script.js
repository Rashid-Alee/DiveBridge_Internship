const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function () {
  const taskText = taskInput.value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  li.appendChild(deleteButton);

  deleteButton.onclick = function () {
    taskList.removeChild(li);
  };

  taskList.appendChild(li);
  taskInput.value = "";
});