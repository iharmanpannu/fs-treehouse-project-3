const form = document.querySelector("form");
const name = document.querySelector("#name");
const firstFieldSet = document.querySelectorAll("fieldset")[0];
const inputOption = document.getElementById("other-title");
// inputOption.selected;
window.addEventListener("load", () => {
  focusNameInput();
});

// This function adds focus when page loads
function focusNameInput() {
  name.focus();
}

// function appendInputOtherJob(event) {
//   const otherJobInput = document.createElement("input");
//   otherJobInput.setAttribute("type", "text");
//   otherJobInput.id = "other-title";
//   otherJobInput.setAttribute("placeholder", "Your Job Role");
//   otherJobInput.style.display = "none";
//   firstFieldSet.appendChild(otherJobInput);

// }

function ChangedToOther() {
  // if the job role event was changed to other a nice text menu is created
  if (this.value === "option") {
  }
}

ChangedToOther();
