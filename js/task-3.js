// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input) підставляє його поточне значення в span#name - output як ім’я для привітання.Обов’язково очищай значення в інпуті по краях від пробілів.Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous". 

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