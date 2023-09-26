let taskStatusElement = document.getElementById("taskStatus");
let toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", function() {
  let currentStatus = taskStatusElement.textContent;
  if (currentStatus === "未完了") {
    taskStatusElement.textContent = "完了";
  } else {
    taskStatusElement.textContent = "未完了";
  }
});

