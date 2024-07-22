
const boxesDiv = document.querySelector("#boxes");
const controlsDiv = document.querySelector("#controls");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const inputAmount = document.querySelector("#controls input");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {  
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(box);
  }
}
createBtn.addEventListener('click', () => {
  const amount = parseInt(inputAmount.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputAmount.value = ""; 
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});
function destroyBoxes(){
boxesDiv.querySelectorAll("div").forEach(element => element.remove());
}
destroyBtn.addEventListener("click", destroyBoxes);

destroyBtn.style.padding = "8px 16px";
destroyBtn.style.borderRadius = "8px";
destroyBtn.style.width = "120px";
destroyBtn.style.height = "40px";
destroyBtn.style.backgroundColor = "#ff4e4e";
destroyBtn.style.border = "none";
destroyBtn.style.color = "#fff";

 destroyBtn.addEventListener('mouseenter', () => {
            destroyBtn.style.backgroundColor = '#ff7070';
        });

        destroyBtn.addEventListener('mouseleave', () => {
            destroyBtn.style.backgroundColor = '#ff4e4e';
        });

createBtn.style.borderRadius = "8px";
createBtn.style.padding = "8px 16px";
createBtn.style.width = "120px";
createBtn.style.height = "40px";
createBtn.style.backgroundColor = "#4e75ff";
createBtn.style.border = "none";
createBtn.style.color = "#fff";
createBtn.style.marginRight = "16px"

        createBtn.addEventListener('mouseenter', () => {
            createBtn.style.backgroundColor = '#6c8cff';
        });

        createBtn.addEventListener('mouseleave', () => {
            createBtn.style.backgroundColor = '#4e75ff';
        });

controlsDiv.style.borderRadius = "8px";
controlsDiv.style.padding = "20px";
controlsDiv.style.width = "486px";
controlsDiv.style.height = "104px";
controlsDiv.style.backgroundColor = "#f6f6fe";
controlsDiv.style.margin = "0 auto";

inputAmount.style.border = "1px solid #808080";
inputAmount.style.borderRadius = "8px";
inputAmount.style.padding = "8px 50px";
inputAmount.style.width = "150px";
inputAmount.style.height = "40px";
inputAmount.style.marginRight = "16px"

boxesDiv.style.borderRadius = "8px";
boxesDiv.style.padding = "32px";
boxesDiv.style.width = "486px";
boxesDiv.style.backgroundColor = "#f6f6fe";
boxesDiv.style.display = "flex";
boxesDiv.style.flexDirection = "row";
boxesDiv.style.columnGap = "40px";
boxesDiv.style.rowGap = "10px";
boxesDiv.style.flexWrap = "wrap";
boxesDiv.style.margin = "0 auto";

