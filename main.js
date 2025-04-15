function addTask() {
  const task = document.getElementById("task");
  const taskText = task.value.trim();
  const li = document.createElement("li");
  const list = document.getElementById("tasks-list");
  const completedBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  li.textContent = taskText;
  li.appendChild(completedBtn);
  li.appendChild(deleteBtn);

  completedBtn.innerText = "✔"
  deleteBtn.innerHTML = "❌"


  list.appendChild(li);
  task.value = "";

  completedBtn.onclick = () =>{
    li.classList.toggle("completed");
  }

  deleteBtn.onclick = () =>{
    li.remove();
  }

}