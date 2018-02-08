const form = document.querySelector("form");
const name = document.querySelector("#name");

window.addEventListener("load", () => {
  loadPage();
});

// This function adds focus when page loads
function loadPage() {
  name.focus();
}
