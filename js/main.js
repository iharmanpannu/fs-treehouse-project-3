const form = document.querySelector("form");
const name = document.querySelector("#name");

window.addEventListener("load", () => {
  focusNameInput();
});

// This function adds focus when page loads
function focusNameInput() {
  name.focus();
}
