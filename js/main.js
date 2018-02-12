const form = document.querySelector("form");
const name = document.querySelector("#name");
const firstFieldSet = document.querySelectorAll("fieldset")[0];
const inputOption = document.querySelector("#other-title");
// inputOption.style.display = "none";

window.addEventListener("load", () => {
  focusNameInput();
  ChangedToOther();
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

function ChangedToOther(event) {
  //if the job role event was changed to other a nice text menu is created
  event.target.value == "other"
    ? (inputOption.style.display = "block")
    : (inputOption.style.display = "none");
}
