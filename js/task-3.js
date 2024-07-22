
const inputVal = document.querySelector("#name-input");
const span = document.querySelector("#name-output");


inputVal.addEventListener('input', event => {
    const trimmedValue = event.currentTarget.value.trim(); // Обрізаємо пробіли
    if (trimmedValue === "") {
        span.textContent = "Anonymous";
    } else {
        span.textContent = trimmedValue;
    }
});

const title = document.querySelector("h1");

inputVal.style.margin = "0 auto 0 auto";
inputVal.style.alightSelf = "center"
inputVal.style.width = "360px";
inputVal.style.height = "40px";

title.style.margin = "0 auto";
