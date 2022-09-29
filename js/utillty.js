// input field

function inputField(inputId) {
  let inputField = document.getElementById(inputId);
  return inputField;
}

// input field string value
function inputFieldStringValue(inputId) {
  let inputField = document.getElementById(inputId);
  let inputFieldValue = inputField.value.toLowerCase();
  return inputFieldValue;
}
