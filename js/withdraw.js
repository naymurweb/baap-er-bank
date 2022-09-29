document.getElementById("withdraw-btn").addEventListener("click", function () {
  let withdrawInput = inputField("withdraw-input");
  let totalBalance = inputField("balance-total");
  let withdrawText = document.getElementById("withdraw");

  let withdrawInputValue = inputFieldValue("withdraw-input");
  let withdrawAmount = amountValue("withdraw");
  let totalBalanceAmount = amountValue("balance-total");

  //   error handel
  if (
    isNaN(withdrawInputValue) ||
    withdrawInputValue < 0 ||
    withdrawInputValue > totalBalanceAmount
  ) {
    withdrawInput.style.border = "2px solid red";
    withdrawInput.setAttribute("placeholder", "Please valid withdraw amount!");
  } else {
    withdrawInput.style.border = "none";
    withdrawInput.setAttribute("placeholder", "Amount you want to Withdraw");
    //   total deposit add
    withdrawText.innerText = withdrawAmount + withdrawInputValue;
    //   total balance add
    totalBalance.innerText = totalBalanceAmount - withdrawInputValue;
  }
});
