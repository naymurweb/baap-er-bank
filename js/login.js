document.getElementById("submit-btn").addEventListener("click", function () {
  // input field
  let emailInputField = inputField("email-field");
  let passwordInputField = inputField("password-field");
  // input field value
  let emailFieldValue = inputFieldStringValue("email-field");
  let passwordFieldValue = inputFieldStringValue("password-field");

  if (
    emailFieldValue === "naymurweb@gmail.com" &&
    passwordFieldValue === "12345"
  ) {
    window.location.href = "../banking.html";
  } else {
    // error handel
    emailInputField.style.border = "2px solid red";
    passwordInputField.style.border = "2px solid red";
  }
});
