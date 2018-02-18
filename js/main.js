const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#mail");
const JobRoles = document.querySelector("select");
const firstFieldSet = document.querySelectorAll("fieldset")[0];
const InputOther = document.querySelector("#other-title");
const designSelectMenu = document.querySelector("#design");
const color = document.getElementById("color");
const colorOptions = document.querySelectorAll("#color option");

window.addEventListener("load", () => {
  focusNameInput();
  form.reset();
  // form.addEventListener("submit", e => e.preventDefault());
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

// function resetOptions() {
//   const size = document.querySelector("#size");
//   const paymentSelect = document.getElementById("payment");
//   designSelectMenu.selectedIndex = 0;
//   size.selectedIndex = 0;
//   paymentSelect.selectedIndex = 1;
// }

//calling functions
hideColor();
// resetOptions();
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

function activity() {
  // if user selects checkbox[o] totalInput = $200
  // if user selects checkbox[1] totalInput = $100 && disable checkbox[3]
  // if user selects checkbox[2] totalInput = $100 && disable checkbox[3] & checkbox[4]
  // if user selects checkbox[3] totalInput = $100 && disable checkbox[1] & checkbox[5]
  // if user selects checkbox[4] totalInput = $100 && disable checkbox[2] & checkbox[6]
  // if user selects checkbox[5] totalInput = $100 && disable checkbox[3] & checkbox[1]
  // if user selects checkbox[6] totalInput = $100 && disable checkbox[4] & checkbox[2]

  for (let i = 0; i < checkBoxes.length; i++) {
    //On load uncheck all boxes
    checkBoxes[i].checked = false;
    // if user selects checkbox[1] totalInput = $100 && disable checkbox[3]
    // checkBoxes[0].addEventListener("click", e => {});
    checkBoxes[1].addEventListener("click", e => {
      disableBoxes(checkBoxes[1], checkBoxes[5], checkBoxes[3]);
      // calculateTotal();
    });
    checkBoxes[2].addEventListener("click", e => {
      disableBoxes(checkBoxes[2], checkBoxes[3], checkBoxes[4]);
      // calculateTotal();
    });
    checkBoxes[3].addEventListener("click", e => {
      disableBoxes(checkBoxes[3], checkBoxes[1], checkBoxes[5]);
      // calculateTotal();
    });
    checkBoxes[4].addEventListener("click", e => {
      disableBoxes(checkBoxes[4], checkBoxes[2], checkBoxes[6]);
      // calculateTotal();
    });
    checkBoxes[5].addEventListener("click", e => {
      disableBoxes(checkBoxes[5], checkBoxes[3], checkBoxes[1]);
      // calculateTotal();
    });
    checkBoxes[6].addEventListener("click", e => {
      disableBoxes(checkBoxes[6], checkBoxes[4], checkBoxes[2]);
      // calculateTotal();
    });
  }
}

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

// selected all checkBoxes
const activityCheckBoxes = document.querySelectorAll("input[type=checkbox]");
// Get span to print total
const printTotal = document.getElementById("printTotal");
let total = 0;
function getActivityPrices(userInput) {
  // selected all checkBoxes

  // Loop through checkbox list
  for (let i = 0; i < activityCheckBoxes.length; i++) {
    if (activityCheckBoxes[i].checked) {
      let userInput = parseInt(activityCheckBoxes[i].value);
      total = total + userInput;
    }
  }
  return total;
}

function calculateTotal() {
  let total = getActivityPrices();
  printTotal.innerHTML = `Your Total is $${total}`;
  printTotal.style.display = "block";
}

function showPriceIfChecked() {
  for (let i = 0; i < activityCheckBoxes.length; i++) {
    activityCheckBoxes[i].addEventListener("change", () => {
      calculateTotal();
    });
  }
}
showPriceIfChecked();
// Payment Info section of the form
const paymentSelect = document.getElementById("payment");
const paymentOptions = document.querySelectorAll("#payment option");
const creditCard = document.getElementById("credit-card");
const paypal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");
paypal.style.display = "none";
bitcoin.style.display = "none";
console.log(paymentOptions);
function showPaymentOption(e) {
  // if select id="payment" value="credit card" show div id="credit-card"
  // if select id="paypal" value="credit card" show div id="credit-card"
  // if select id="payment" value="credit card" show div id="credit-card"
  // select the option menu by id="payment"
  for (let i = 0; i < paymentOptions.length; i++) {
    if (e.target.value === "paypal") {
      creditCard.style.display = "none";
      bitcoin.style.display = "none";
      paypal.style.display = "block";
    } else if (e.target.value === "bitcoin") {
      creditCard.style.display = "none";
      paypal.style.display = "none";
      bitcoin.style.display = "block";
    } else {
      creditCard.style.display = "block";
      paypal.style.display = "none";
      bitcoin.style.display = "none";
    }
  }
}
paymentSelect.onchange = showPaymentOption;
const button = document.querySelector("button");
const errorActivity = document.getElementById("acitivity-error");
errorActivity.style.display = "none";

// button.addEventListener("click", );
function formValidation() {
  // if name field text is less than 0 or a number dont submit
  button.addEventListener("click", e => {
    if (name.value === "" || name.value === null) {
      alert("Please enter your name");
      e.preventDefault();
    }
    const at = "@";
    //if email field is empty show alert box
    if (email.value.indexOf(at) === -1) {
      alert("Please enter valid email");
      // console.log("Please enter valid email");
      e.preventDefault();
      email.focus();
    }
    // must check one of the checkbox
    if (total === 0) {
      errorActivity.style.display = "block";
      setTimeout(() => {
        errorActivity.style.display = "none";
      }, 5000);
      e.preventDefault();
    }
    // for (let i = 0; i < activityCheckBoxes.length; i++) {
    //   const isChecked = activityCheckBoxes[i].checked;

    //   if (!isChecked) {
    //     errorActivity.style.display = "block";
    //     setTimeout(() => {
    //       errorActivity.style.display = "none";
    //     }, 5000);
    //     e.preventDefault();
    //   }
    // }
    const cardNumber = document.getElementById("cc-num");
    // const checkCardNumber = /^\d{16}$/;
    if (
      cardNumber.value.length < 13 ||
      cardNumber.value.length > 17 ||
      cardNumber.value.match(/^[0-9]+$/) == null
    ) {
      alert("Please enter valid card number");
      e.preventDefault();
    }
  });
}
formValidation();
