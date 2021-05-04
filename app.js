
const toggle = document.querySelector(".toggle input");

toggle.addEventListener("click", () =>{
    const body = document.querySelector("body");
    body.classList.toggle("darkmode");
})

