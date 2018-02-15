const form = document.querySelector("form");
const name = document.querySelector("#name");
const JobRoles = document.querySelector("select");
const firstFieldSet = document.querySelectorAll("fieldset")[0];
const InputOther = document.querySelector("#other-title");
const designSelectMenu = document.querySelector("#design");
const color = document.getElementById("color");
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

// function appendSelectOption() {
//   const selectOption = document.createElement("option");
//   selectOption.value = "Please Select";
//   selectOption.text = "Select One Color";
//   selectOption.setAttribute("disabled", true);
//   color.insertBefore(selectOption, colorOptions[0]);
//   reset();
// }

// function reset() {
//   color.selectedIndex = 0;
// }

//change colors as the user selects the menu
// Hide all the options
function hideColor() {
  // appendSelectOption();
  for (let i = 0; i < colorOptions.length; i++) {
    colorOptions[i].style.display = "none";
  }
}

function resetOptions() {
  const size = document.querySelector("#size");
  designSelectMenu.selectedIndex = 0;
  size.selectedIndex = 0;
}

//calling functions
hideColor();
resetOptions();
designSelectMenu.onchange = showAvailableColors;
// Show available color on selection function
function showAvailableColors(e) {
  // if theme js pune selected then show "cornflower blue, Dark slate grey, and gold "
  if (e.target.value === "js puns") {
    colorOptions.forEach(
      (color, i) => (color.style.display = i >= 0 && i < 3 ? "block" : "none")
    );
    color.selectedIndex = 0; // Reset the options on change

    // if theme I JS selected show Tomoto, steel blue and dim grey
  } else if (e.target.value === "heart js") {
    colorOptions.forEach(
      (color, i) => (color.style.display = i <= 2 ? "none" : "block")
    );
    color.selectedIndex = 3; // Reset the options on change
  }
}

// Function to register for activites
const activities = document.querySelector(".activities");
const checkBoxes = document.querySelectorAll("input[type=checkbox]");
console.log(checkBoxes);
const totalInput = document.createElement("input");
totalInput.value = 0;
function valueOnly() {
  // if user selects checkbox[o] totalInput = $200
  // if user selects checkbox[1] totalInput = $100
  // if user selects checkbox[2] totalInput = $100
  // if user selects checkbox[3] totalInput = $100
  // if user selects checkbox[3] totalInput = $100
  // if user selects checkbox[3] totalInput = $100
  // if user selects checkbox[3] totalInput = $100
  for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[0].onchange = () =>
      console.log("====================================");
    console.log("200");
    console.log("====================================");
  }
}

function appendTotal() {
  const totalLabel = document.createElement("label");
  // totalInput.value = "Hello";
  const valueOnly = (totalLabel.textContent = `Total: $${totalInput.value}`);
  activities.appendChild(totalLabel);
}
for (let i = 0; i < checkBoxes.length; i++) {
  console.log(checkBoxes[i]);
  checkBoxes[i].onchange = () => valueOnly();
}

function activity() {
  appendTotal();
}

activity();
