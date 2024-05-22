//step-1 : add event listner to deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  //step-2 (a): get the deposite ammount from the deposite input field
  // step-2 (b): for input field use.value to the value use the input field
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  //get the depposit curent total
  //for no input (element other than input text area),use innerText to ger the Text
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositeTotalString = depositTotalElement.innerText;
  const previousDepositeTotal = parseFloat(previousDepositeTotalString);

  //step-4 add numbers to set the total deposite
  const currentDepositeTotal = previousDepositeTotal + newDepositAmount;
  //set the deposite total
  depositTotalElement.innerText = currentDepositeTotal;

  //step-5 Get balance current total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  //step-6 calculate current balance

  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  //set the balance total
  balanceTotalElement.innerText = currentBalanceTotal;

  //step-7 : Clear the deposit field
  depositField.value = "";
});
