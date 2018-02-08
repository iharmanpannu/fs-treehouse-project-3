const form = document.querySelector("form");
const name = document.querySelector("#name");
const firstFieldSet = document.querySelectorAll("fieldset")[0];
const otherJob = document.getElementById("title");

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
  firstFieldSet.appendChild(otherJobInput);
}

function otherJobTextField(nameSelect) {
  if (nameSelect) {
    const jobOptionVal = document.getElementById("other-job").value;
    if (jobOptionVal === nameSelect.value) {
      appendInputOtherJob();
    }
  } else {
    console.log("====================================");
    console.log("Hello");
    console.log("====================================");
  }
}

otherJobTextField();
