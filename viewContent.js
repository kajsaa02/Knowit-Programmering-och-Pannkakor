displayContent();

function displayContent() {
  document.getElementById("output").value = "";

  var CurrentTaskNumber = localStorage.getItem("currentTask"); //return number

  const descriptionContent =
    tasksobject["tasks"][CurrentTaskNumber]["description"];
  document.getElementById("descriptionText").innerHTML = descriptionContent;

  const taskContent = tasksobject["tasks"][CurrentTaskNumber]["task"];
  document.getElementById("taskText").innerHTML = taskContent;

  const hintContent = tasksobject["tasks"][CurrentTaskNumber]["hint"];
  document.getElementById("hint").innerHTML = hintContent;
}

function loadNextTask() {
  var currentTaskNumber = localStorage.getItem("currentTask");

  currentTaskNumber++;
  localStorage.setItem("currentTask", currentTaskNumber);
  closeHintNewTask();
  workspace.clear();
  displayContent();
}

function loadPrevTask() {
  var CurrentTaskNumber = localStorage.getItem("currentTask");
  if (CurrentTaskNumber == 0) {
    return;
  } else {
    CurrentTaskNumber--;
    localStorage.setItem("currentTask", CurrentTaskNumber);
    closeHintNewTask();
    workspace.clear();
    displayContent();
  }
}
