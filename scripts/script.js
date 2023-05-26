// year for footer section
let yr = new Date().getFullYear();
document.querySelector(".footpara").innerHTML = yr;

// side bar for tab/phone view
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    });
}
if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    });
}



//-------------newsletter section-----------------
function thanks() {
    alert("Thank you for subscribing us")
}