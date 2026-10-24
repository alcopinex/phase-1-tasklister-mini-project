function buildToDo(todo) {
  const li = document.createElement("li");
  li.textContent = todo;
  document.getElementById("tasks").appendChild(li);
}

function init() {
  const form = document.getElementById("create-task-form");
  if (!form || form.dataset.bound) return;
  form.dataset.bound = "true";

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = document.getElementById("new-task-description");
    const task = input.value;

    buildToDo(task);
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", init);
if (document.readyState !== "loading") {
  init();
}