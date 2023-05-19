displayContent();
//var tasksobject = JSON.parse(localStorage.getItem("tasksobjectLS") || "[]");

function displayContent() {
  document.getElementById("output").value = "";

  var tasksobject = JSON.parse(localStorage.getItem("tasksobject"));

  var CurrentTaskNumber = localStorage.getItem("currentTask"); //return number

  const descriptionContent =
    tasksobject["tasks"][CurrentTaskNumber]["description"];
  document.getElementById("descriptionText").innerHTML = descriptionContent;

  const taskContent = tasksobject["tasks"][CurrentTaskNumber]["task"];
  document.getElementById("taskText").innerHTML = taskContent;

  const hintContent = tasksobject["tasks"][CurrentTaskNumber]["hint"];
  document.getElementById("hint").innerHTML = hintContent;
  return;
}

function loadNextTask() {
  var currentTaskNumber = localStorage.getItem("currentTask");

  currentTaskNumber++;
  localStorage.setItem("currentTask", currentTaskNumber);
  setComplete();
  closeHintNewTask();
  workspace.clear();
  displayContent();
  let x = document.getElementById("checkmark");
  console.log(taskComplete);
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
    checkmark();
    console.log(taskComplete);
  }
}
