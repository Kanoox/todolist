var taskList = document.getElementById("taskList");

    function addTask() {
      var taskInput = document.getElementById("taskInput");
      var taskText = taskInput.value;

      if (taskText === "") {
        return; // Ne rien faire si le champ est vide
      }

      var li = document.createElement("li");
      li.innerHTML = taskText;

      var valideButton = document.createElement("button");
      valideButton.innerHTML = '<ion-icon name="bookmark-outline" class="validate"></ion-icon>';
      valideButton.onclick = function() {
        validateButton(li);
      };

      var editButton = document.createElement("button");
      editButton.innerHTML = '<ion-icon name="pencil-outline" class="modify"></ion-icon>';
      editButton.onclick = function() {
        editTask(li);
      };

      var deleteButton = document.createElement("button");
      deleteButton.innerHTML = '<ion-icon name="trash-outline" class="delete"></ion-icon>';
      deleteButton.onclick = function() {
        deleteTask(li);
      };

      li.appendChild(valideButton);
      li.appendChild(editButton);
      li.appendChild(deleteButton);
      taskList.appendChild(li);

      taskInput.value = "";
    }


    function validateButton(task){
      if (task.style.backgroundColor == "lightgreen") {
        task.style.backgroundColor = "white";
      } else {
        task.style.backgroundColor = "lightgreen";
      }
    }

    function editTask(task) {
        var taskTextElement = task.firstChild;
        var taskText = taskTextElement.textContent;
      
        var newTaskText = prompt("Modifier la tâche :", taskText);
      
        if (newTaskText === null || newTaskText === "") {
          return; // Ne rien faire si l'utilisateur a cliqué sur Annuler ou n'a pas entré de nouveau texte
        }
      
        taskTextElement.textContent = newTaskText;
      }
      

    function deleteTask(task) {
      taskList.removeChild(task);
    }