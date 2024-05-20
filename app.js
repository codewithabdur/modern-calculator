document.title = "CodeWithAbdur";
const input = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");
const DEL = document.getElementById("DEL");

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    const clickedButton = e.target.closest("button");
    if (clickedButton.innerHTML === "=") {
      if (input.value === "") {
        input.value = "Value is Null";
      } else {
        string = eval(string);
        input.value = string;
      }
    } else if (clickedButton.innerHTML === "AC") {
      string = "";
      input.value = string;
    } else if (clickedButton === DEL) {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += clickedButton.innerHTML;
      input.value = string;
    }
  });
});
