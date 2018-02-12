const form = document.querySelector("form");
const name = document.querySelector("#name");
const JobRole = document.querySelector("select");
const firstFieldSet = document.querySelectorAll("fieldset")[0];
const InputOther = document.querySelector("input#other");
InputOther.style.display = "none";
// const optionOtherJob = document.querySelectorAll("option");
// const inputOption = document.getElementById("other-title");
// inputOption.style.display = "none";

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
function ChangedToOther(event) {
  //if the job role event was changed to other a nice text menu is created
  if (event.target.value == "other") InputOther.style.display = "block";
  else InputOther.style.display = "none";
}
JobRole.onchange = ChangedToOther;
