let initialized = false;

function buildToDo(todo) {
  const li = document.createElement("li");
  li.textContent = todo;
  document.getElementById("tasks").appendChild(li);
}

function init() {
  if (initialized) return;
  initialized = true;

  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const task = event.target["new-task-description"].value;
    console.log("Task submitted:", task);

    buildToDo(task);
    form.reset();
  });
}

// Works whether the test loads the script before or after the DOM is ready,
// and whether or not it fires DOMContentLoaded itself.
document.addEventListener("DOMContentLoaded", init);
if (document.readyState !== "loading") {
  init();
}