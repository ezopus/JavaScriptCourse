function attachEvents() {
  const loadBtn = document.querySelector("#load-button");
  loadBtn.addEventListener("click", handleLoadTasks);

  const input = document.querySelector("#title");

  const addTaskBtn = document.querySelector("#add-button");
  addTaskBtn.addEventListener("click", addNewTask);

  const tasks = {};

  const taskListElement = document.getElementById("todo-list");

  async function loadTasks() {
    taskListElement.innerHTML = "";
    const res = await fetch("http://localhost:3030/jsonstore/tasks/");
    const body = await res.json();

    Object.values(body).forEach((e) => {
      tasks[e._id] = {
        ...e,
      };

      const taskWrapper = createElement("li", "", "", `${e._id}`, taskListElement);
      createElement("span", `${e.name}`, "name", "", taskWrapper);

      const deleteBtn = createElement("button", "Remove", "", "", taskWrapper);
      const updateBtn = createElement("button", "Edit", "", "", taskWrapper);

      deleteBtn.addEventListener("click", deleteTask);
      updateBtn.addEventListener("click", updateTask);

      input.value = "";
    });
  }

  function updateTask(e) {
    const taskId = e.target.parentNode.id;
    const parent = e.target.parentNode;
    const spanElement = parent.children[0];
    const removeBtn = parent.children[1];
    const editBtn = parent.children[2];

    spanElement.remove();
    removeBtn.remove();
    editBtn.remove();

    const editInputField = createElement("input");
    editInputField.type = "text";
    editInputField.value = `${tasks[taskId].name}`;
    editBtn.textContent = "Submit";

    parent.appendChild(editInputField);
    parent.appendChild(removeBtn);
    parent.appendChild(editBtn);

    editBtn.removeEventListener("click", updateTask);
    editBtn.addEventListener("click", submitTaskEdit);
  }

  function submitTaskEdit(e) {
    const taskId = e.target.parentNode.id;
    const editedTaskInputField = e.target.parentNode.children[0];
    fetch(`http://localhost:3030/jsonstore/tasks/${taskId}`, {
      method: "PATCH",
      body: JSON.stringify({
        name: editedTaskInputField.value,
        _id: taskId,
      }),
    }).then(loadTasks);
  }

  function deleteTask(e) {
    const taskId = e.target.parentNode.id;
    fetch(`http://localhost:3030/jsonstore/tasks/${taskId}`, {
      method: "DELETE",
    }).then(loadTasks);
  }

  function addNewTask(e) {
    e.preventDefault();
    if (input.value === "") {
      return;
    }

    const name = input.value;

    fetch("http://localhost:3030/jsonstore/tasks/", {
      method: "POST",
      body: JSON.stringify({ name }),
    }).then(loadTasks);
  }

  function handleLoadTasks(e) {
    e.preventDefault();
    loadTasks();
  }

  function createElement(type, text, classLabel, id, parent) {
    const el = document.createElement(`${type}`);
    if (text) {
      el.textContent = text;
    }
    if (classLabel) {
      if (Array.isArray(classLabel)) {
        classLabel.forEach((cl) => {
          el.classList.add(`${cl}`);
        });
      } else {
        el.classList.add(`${classLabel}`);
      }
    }
    if (id) {
      el.id = id;
    }
    if (parent) {
      parent.appendChild(el);
    }
    return el;
  }
}

attachEvents();
