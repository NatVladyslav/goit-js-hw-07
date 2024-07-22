const list = document.querySelector("#categories");
const listEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${listEl.length}`);

listEl.forEach(el => {
    console.log(`Category: ${el.querySelector("h2").textContent}`);
    el.style.backgroundColor = "#F6F6FE";
    el.style.listStyleType = "none";
    el.style.width = "360px"
    el.style.margin = "0 auto 20px auto";
    el.style.padding = "10px 10px 10px 10px";
    el.querySelector("ul").style.listStyleType = "none";
    console.log(`Elements: ${el.querySelector("ul").querySelectorAll("li").length}`);
});



