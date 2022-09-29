// input field

function inputField(inputId) {
  let inputField = document.getElementById(inputId);
  return inputField;
}

// input field string value
function inputFieldStringValue(inputId) {
  let inputField = document.getElementById(inputId);
  let inputFieldValue = inputField.value.toLowerCase();
  inputField.value = "";
  return inputFieldValue;
}

// input field number value
function inputFieldValue(inputId) {
  let inputField = document.getElementById(inputId);
  let inputFieldValue = parseFloat(inputField.value);
  inputField.value = "";
  return inputFieldValue;
}

// amount value
function amountValue(amountId) {
  let amount = document.getElementById(amountId);
  let amountValue = parseFloat(amount.innerText);
  return amountValue;
}
