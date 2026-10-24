function buildToDo(todo) {
  const li = document.createElement("li");
  li.textContent = todo;
  document.getElementById("tasks").appendChild(li);
}

function init() {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const task = event.target["new-task-description"].value;
    console.log("Task submitted:", task);

    buildToDo(task);
    form.reset();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}