function addTask() {
  const task = document.getElementById("task");
  const taskText = task.value.trim();
  const li = document.createElement("li");
  const list = document.getElementById("tasks-list");

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  li.textContent = taskText;

  list.appendChild(li);
  task.value = "";

}