document.getElementById("deposit-btn").addEventListener("click", function () {
  let depositInput = inputField("deposit-input");
  let totalBalance = inputField("balance-total");
  let depositText = document.getElementById("deposit");

  let depositInputValue = inputFieldValue("deposit-input");
  let depositAmount = amountValue("deposit");
  let totalBalanceAmount = amountValue("balance-total");

  //   error handel
  if (isNaN(depositInputValue) || depositInputValue < 0) {
    depositInput.style.border = "2px solid red";
    depositInput.setAttribute("placeholder", "Please valid deposit amount!");
  } else {
    depositInput.style.border = "none";
    depositInput.setAttribute("placeholder", "Amount you want to Deposit");
    //   total deposit add
    depositText.innerText = depositAmount + depositInputValue;
    //   total balance add
    totalBalance.innerText = totalBalanceAmount + depositInputValue;
  }
});
