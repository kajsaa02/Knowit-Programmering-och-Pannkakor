const descriptionContent = JSON.stringify(task1.description);
document.getElementById("descriptionText").innerHTML = descriptionContent;

const taskContent = JSON.stringify(task1.task);
document.getElementById("taskText").innerHTML = taskContent;
console.log(document.getElementById("taskText"));
console.log("hej!");

const hintContent = JSON.stringify(task1.hint);
document.getElementById("hint").innerHTML = hintContent;
