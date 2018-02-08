const form = document.querySelector("form");
const name = document.querySelector("#name");
const firstFieldSet = document.getElementsByName("fieldset");

window.addEventListener("load", () => {
  focusNameInput();
  otherJobTextField();
});

// This function adds focus when page loads
function focusNameInput() {
  name.focus();
}

function otherJobTextField() {
  const textArea = document.createElement("input");
  textArea.setAttribute("type", "text");
  textArea.id = "other-title";
  textArea.setAttribute("placeholder", "Your Job Role");
  // '<input type="text"  id="other-title" placeholder="Your Job Role">';
  firstFieldSet.appendChild(textArea);
  return;
}
