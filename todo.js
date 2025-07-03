function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
  
    const li = document.createElement("li");
    li.className = "task";
  
    const taskField = document.createElement("input");
    taskField.type = "text";
    taskField.value = taskText;
    taskField.disabled = true;
  
    const buttons = document.createElement("div");
    buttons.className = "task-buttons";
  
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.onclick = function () {
      taskField.disabled = !taskField.disabled;
      editBtn.innerText = taskField.disabled ? "Edit" : "Save";
    };
  
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = function () {
      li.remove();
    };
  
    buttons.appendChild(editBtn);
    buttons.appendChild(deleteBtn);
  
    li.appendChild(taskField);
    li.appendChild(buttons);
  
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
  }
  