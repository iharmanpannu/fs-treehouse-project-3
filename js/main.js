const form = document.querySelector("form");
const name = document.querySelector("#name");
const firstFieldSet = document.querySelectorAll("fieldset")[0];

window.addEventListener("load", () => {
  focusNameInput();
});

// This function adds focus when page loads
function focusNameInput() {
  name.focus();
}

function appendInputOtherJob() {
  const otherJobInput = document.createElement("input");
  otherJobInput.setAttribute("type", "text");
  otherJobInput.id = "other-title";
  otherJobInput.setAttribute("placeholder", "Your Job Role");
  otherJobInput.style.display = "none";
  firstFieldSet.appendChild(otherJobInput);
}

appendInputOtherJob();
