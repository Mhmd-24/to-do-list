const taskInput = document.getElementById("task-input");
const list = document.getElementById("tasks-list");

function addTask() {

  const taskText = taskInput.value.trim();
  
  if (taskText === "") {
    alert("Please enter a task!");
  }else{
    const li = document.createElement("li");
    li.innerHTML = taskText;
    li.classList.add("task");
    list.appendChild(li);
    const remove = document.createElement("span");
    remove.innerHTML = "&#10006";
    li.appendChild(remove);
  }

  taskInput.value = "";
  saveData();
}

list.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove()
    saveData();
  }
}, false);

function saveData(){
  localStorage.setItem("task", list.innerHTML);
}

function showTask(){
  list.innerHTML = localStorage.getItem("task");
}

showTask();

function filter(filter) {
  const tasks = document.querySelectorAll(".task");
  
  tasks.forEach(task => {

    switch(filter){
      case 'all':
        task.style.display = 'block'
        break;
      case "completed" :
        task.style.display = task.classList.contains("checked") ? 'block' : 'none';
        break;
      case 'pending':
        task.style.display = task.classList.contains("checked") ? 'none' : 'block';
    }
    
  });
}