const form = document.querySelector("form");
const name = document.querySelector("#name");
const JobRoles = document.querySelector("select");
const firstFieldSet = document.querySelectorAll("fieldset")[0];
const InputOther = document.querySelector("#other-title");
const designSelectMenu = document.querySelector("#design");
const colorOptions = document.querySelectorAll("#color option");

window.addEventListener("load", () => {
  focusNameInput();
});

// This function adds focus when page loads
function focusNameInput() {
  name.focus();
}

// Other Job selected function
InputOther.style.display = "none";
function onOtherJobSelected(e) {
  // if in job Selection select menu option other job is onOtherJobSelected
  // then display then text box else display nothing
  e.target.value === "other"
    ? (InputOther.style.display = "block")
    : (InputOther.style.display = "none");
  // focus the text field
  InputOther.focus();
}
JobRoles.onchange = onOtherJobSelected;

//change colors as the user selects the menu
// Hide all the options
for (let i = 0; i < colorOptions.length; i++) {
  colorOptions[i].style.display = "none";
}
function showAvailableColors(e) {
  // if theme js pune selected then show "cornflower blue, Dark slate grey, and gold "
  // if theme I JS selected show Tomoto, steel blue and dim grey
  // if (e.target.value === 'js pune')
}
designSelectMenu.onchange = showAvailableColors;
