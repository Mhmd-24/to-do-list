function addTask() {

  const task = document.getElementById("task");
  const taskText = task.value.trim();
  const list = document.getElementById("tasks-list");
  
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
}

list.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
  }else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove()
  }
}, false);