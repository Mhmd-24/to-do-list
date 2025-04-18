const task = document.getElementById("task");
const list = document.getElementById("tasks-list");

function addTask() {

  const taskText = task.value.trim();
  
  if (taskText === "") {
    alert("Please enter a task!");
  }else{
    const li = document.createElement("li");
    li.innerHTML = taskText;
    list.appendChild(li);
    const remove = document.createElement("span");
    remove.innerHTML = "&#10006";
    li.appendChild(remove);
  }

  task.value = "";
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