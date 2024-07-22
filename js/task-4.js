const formArea = document.querySelector(".login-form");

formArea.addEventListener('submit', event => {
    event.preventDefault();
    const trimEmail = event.target.elements.email.value.trim();
    const trimPass = event.target.elements.password.value.trim();
    const testVal = trimEmail !== "" && trimPass !== "";
    const finalObj = {};
    if (testVal) {
        alert("All form fields must be filled in");
    } else {
        for (let element of formArea.elements) {
        if (element.name) {
            finalObj[element.name] = element.value.trim();
        }
        }
        console.log(finalObj)
    }
    formArea.reset();
});

formArea.style.display = "flex";
formArea.style.flexDirection = "column";    
formArea.style.width = "408px";  
formArea.style.margin = "0 auto"; 
formArea.style.rowGap = "16px";
formArea.style.padding = "24px";


for (let label of formArea) {
    label.style.display = "flex";
    label.style.flexDirection = "column";
    label.style.width = "360px";
    label.style.margin = "0 auto"; 
}

const submBut = formArea.querySelector("button");
submBut.style.borderRadius = "8px";
submBut.style.padding = "8px 16px";
submBut.style.alignItems = "center";
submBut.style.justifyContent = "center";
submBut.style.width = "86px";
submBut.style.height = "40px";
submBut.style.backgroundColor = "#4e75ff";
submBut.style.border = "none";
submBut.style.color = "#fff";
submBut.style.margin = "0 auto 0 0"; 