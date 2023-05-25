displayContent();
//var tasksobject = JSON.parse(localStorage.getItem("tasksobjectLS") || "[]");

function displayContent() {
  document.getElementById("output").value = "";
  console.log(localStorage);

  let x = document.getElementById("checkmark");
  x.style.display = "none";

  var nextTaskButton = document.getElementById("nextTaskButton");
  nextTaskButton.classList.remove("next-task-complete");

  var tasksobject = JSON.parse(localStorage.getItem("tasksobject"));

  var CurrentTaskNumber = localStorage.getItem("currentTask"); //return number

  const descriptionContent =
    tasksobject["tasks"][CurrentTaskNumber]["description"];
  document.getElementById("descriptionText").innerHTML = descriptionContent;

  const taskContent = tasksobject["tasks"][CurrentTaskNumber]["task"];
  document.getElementById("taskText").innerHTML = taskContent;

  const hintContent = tasksobject["tasks"][CurrentTaskNumber]["hint"];
  document.getElementById("hint").innerHTML = hintContent;

  var checkComplete = tasksobject["tasks"][CurrentTaskNumber]["complete"];
  var nextTaskButton = document.getElementById("nextTaskButton");

  console.log(tasksobject["tasks"][CurrentTaskNumber]["complete"]);

  if (tasksobject["tasks"][CurrentTaskNumber]["complete"] === true) {
    x.style.display = "block";
    nextTaskButton.classList.add("next-task-complete");
  }
  return;
}

function loadNextTask() {
  var currentTaskNumber = localStorage.getItem("currentTask");
  setComplete();
  console.log(currentTaskNumber);

  if (currentTaskNumber == 15) {
    return;
  } else {
    currentTaskNumber++;
    localStorage.setItem("currentTask", currentTaskNumber);

    closeHintNewTask();
    workspace.clear();
    displayContent();

    let x = document.getElementById("checkmark");
    console.log(taskComplete);
  }
}

function loadPrevTask() {
  var currentTaskNumber = localStorage.getItem("currentTask");
  if (currentTaskNumber == 0) {
    return;
  } else {
    currentTaskNumber--;
    localStorage.setItem("currentTask", currentTaskNumber);
    closeHintNewTask();
    workspace.clear();
    displayContent();
    console.log(taskComplete);
  }
}
