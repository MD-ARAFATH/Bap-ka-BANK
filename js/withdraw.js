//step-1 get add elemet event handler with the withdraw button
//step-2 get the ammount from input field
//step-2.5 make sure to covert  input a number by using parseFloat
//step-3 get previous withdraw total

//step-1
document.getElementById("btn-withdraw").addEventListener("click", function () {
  //step-2
  const withdrawField = document.getElementById("withdraw-field");
  //step-3
  const newWithdrawAmountString = withdrawField.value;
  //step-4
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  //step-5
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  //step-6 calculate total withdraw ammount
  const curentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = curentWithdrawTotal;
});
