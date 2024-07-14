let burgerIcon = document.getElementById("burger");
let navBox = document.querySelector("#main-nav");

burgerIcon.addEventListener("click", toggleMenu);

function toggleMenu() {
  navBox.classList.toggle("hidden");
}

let subForm = document.querySelector("#subscriptionForm");
let subEmail = document.querySelector("#subscriptionEmail");

subEmail.addEventListener("keypress", sendForm);

function sendForm(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    subForm.submit();
  }
}
