/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function validate(event) {
  event.preventDefault();
  var cardNumber = document.querySelector("#inputCardNumber");
  var amount = document.querySelector("#inputAmount");
  var firstname = document.querySelector("#inputFirstName");
  var lastname = document.querySelector("#inputLastName");
  var state = document.querySelector("#inputState");
  var zip = document.querySelector("#inputZip");

  if (cardNumber.value.length < 16) {
  }
  if (cVC.value.length < 3) {
    addError("the CVC number must be at least 3 digits");
  }

  if (amount.value < 1) {
    addError("dollar amount must be at least greater than 1");
  }

  if (firstName.value.length < 2) {
    addError("name submitted must be greater than 1 word");
  }

  if (lastName.value.length < 2) {
    addError("name submitted must be greater than 1 word");
  }

  if (inputCity.value == "Select State.") {
    addError("choose proper city abbreviattion");
  }

  console.log("cardNumber", cardNumber);
  console.log("cardNumber.value", cardNumber.value);
  console.log("cardNumber.value.length", cardNumber.value.length);
}

document.querySelector("#theForm").addEventListener("submit", validate);
