const list = document.querySelector("#categories");
const listEl = list.querySelectorAll(".item");

console.log(`Number of categories: ${listEl.length}`);

let title = listEl.forEach(el => {
    console.log(`Category: ${el.querySelector("h2").textContent}`);
    console.log(`Elements: ${el.querySelector("ul").querySelectorAll("li").length}`);
});



