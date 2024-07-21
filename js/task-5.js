// Функція генерування випадкового кольру
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт, який змінює колір фону елемента < body > через інлайн - стиль по кліку на button.change - color і задає це значення кольору текстовим вмістом для span.color.

const elementBody = document.querySelector("body");
const buttonChange = document.querySelector(".change-color");
const spanText = document.querySelector(".color");
buttonChange.addEventListener("click", () => {
  elementBody.style.backgroundColor = getRandomHexColor();
  spanText.textContent = `${getRandomHexColor()}`;
});
