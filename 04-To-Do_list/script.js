
taskInput = document.querySelector(".taskInput")
taskButton = document.querySelector(".taskButton")
taskList = document.querySelector(".taskList")

// Add a new task
taskButton.addEventListener("click", ()=>{
  const taskText = taskInput.value.trim();

  if(taskText===""){
    alert('Task cannot Empty!')
  }

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task")

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText
   // Create buttons (Edit and Delete)
 const editButton = document.createElement("button");
 editButton.textContent = "Edit"
 const deleteButton = document.createElement("button");
 deleteButton.textContent = "Delete"
   // Append elements to taskDiv
 taskDiv.appendChild(taskSpan)
 taskDiv.appendChild(editButton)
 taskDiv.appendChild(deleteButton)
   // Append taskDiv to taskList
 taskList.appendChild(taskDiv)
 
   // Clear input field
   taskInput.value = "";
 
   // Edit Task
   editButton.addEventListener("click", () => {
     const newTaskText = prompt("Edit your task:", taskSpan.textContent);
     if (newTaskText !== null && newTaskText.trim() !== "") {
       taskSpan.textContent = newTaskText.trim();
     }
   });
   // Delete Task
   deleteButton.addEventListener("click", ()=>{
     taskList.removeChild(taskDiv)
   });

   taskSpan.addEventListener("click", () => {
    taskSpan.classList.toggle("completed");
  });
});