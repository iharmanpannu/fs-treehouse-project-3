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
let amount = parseInt(0);
const total = document.createElement("span");

activities.appendChild(total);
function getTotal() {
  for (let i = 0; i < checkBoxes.length; i++) {
    total.innerHTML = `Total $${amount}`;
  }
}

function activity() {
  // if user selects checkbox[o] totalInput = $200
  // if user selects checkbox[1] totalInput = $100 && disable checkbox[3]
  // if user selects checkbox[2] totalInput = $100 && disable checkbox[3] & checkbox[4]
  // if user selects checkbox[3] totalInput = $100 && disable checkbox[1] & checkbox[5]
  // if user selects checkbox[4] totalInput = $100 && disable checkbox[2] & checkbox[6]
  // if user selects checkbox[5] totalInput = $100 && disable checkbox[3] & checkbox[1]

  checkBoxes[2].addEventListener("click", e =>
    disableBoxes(checkBoxes[2], checkBoxes[3], checkBoxes[4])
  );
  checkBoxes[3].addEventListener("click", e =>
    disableBoxes(checkBoxes[3], checkBoxes[1], checkBoxes[5])
  );
  checkBoxes[4].addEventListener("click", e =>
    disableBoxes(checkBoxes[4], checkBoxes[2], checkBoxes[6])
  );
  checkBoxes[5].addEventListener("click", e =>
    disableBoxes(checkBoxes[5], checkBoxes[3], checkBoxes[1])
  );
  checkBoxes[6].addEventListener("click", e =>
    disableBoxes(checkBoxes[6], checkBoxes[4], checkBoxes[2])
  );
}
// call activity
activity();

function disableBoxes(first, middle, last) {
  if (first.checked) {
    //cheks if it is checked or uncheked
    //this code strips runs when it is checked and makes the input diabled and the label grey
    middle.disabled = true;
    middle.parentNode.style.color = "grey";
    middle.checked = false;
    last.disabled = true;
    last.parentNode.style.color = "grey";
    last.checked = false;
  } else {
    //when its unchecked it makes the input not disabled and the label black
    middle.disabled = false;
    middle.parentNode.style.color = "black";
    last.disabled = false;
    last.parentNode.style.color = "black";
  }
}
