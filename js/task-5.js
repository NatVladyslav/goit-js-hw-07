// Функція генерування випадкового кольру
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const elementBody = document.querySelector("body");
const buttonChange = document.querySelector(".change-color");
const spanText = document.querySelector(".color");
buttonChange.addEventListener("click", () => {
  elementBody.style.backgroundColor = getRandomHexColor();
  spanText.textContent = `${getRandomHexColor()}`;
});



buttonChange.style.borderRadius = "8px";
buttonChange.style.padding = "8px 16px";
buttonChange.style.width = "148px";
buttonChange.style.height = "40px";
buttonChange.style.backgroundColor = "#4e75ff";
buttonChange.style.border = "none";
buttonChange.style.color = "#fff";

const divWidget = document.querySelector(".widget");

divWidget.style.margin = "0 auto";
divWidget.style.width = "169px";