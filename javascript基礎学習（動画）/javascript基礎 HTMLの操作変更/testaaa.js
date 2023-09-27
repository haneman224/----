let taskStatusElement = document.getElementById("taskStatus");
let toggleButton = document.getElementById("toggleButton");
//箱を作って、その箱に指示を出す、その指示はIDを持つ要素を探して、その要素を作った箱に入れるような指示。
//まだいまいちわからないのは、書き換えのところ、if文の入力結果を、変えて、出力結果を変えている。なんでか理解できないのはなぜ？
toggleButton.addEventListener("click", function() {
  let currentStatus = taskStatusElement.textContent;
  if (currentStatus === "未完了") {
    taskStatusElement.textContent = "完了";
  } else {
    taskStatusElement.textContent = "未完了";
  }
});

