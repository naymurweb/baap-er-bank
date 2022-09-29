// deposit
document.getElementById("deposit-btn").addEventListener("click", function () {
  let depositInput = inputField("deposit-input");
  let totalBalance = inputField("balance-total");

  let depositInputValue = inputFieldValue("deposit-input");
  let depositAmount = amountValue("deposit");
  let totalBalanceAmount = amountValue("balance-total");

  //   error handel
  if (isNaN(depositInputValue) || depositInputValue < 0) {
    depositInput.style.border = "2px solid red";
  } else {
    depositInput.style.border = "none";
    //   total deposit add
    deposit.innerText = depositAmount + depositInputValue;
    //   total balance add
    totalBalance.innerText = totalBalanceAmount + depositInputValue;
  }
});
