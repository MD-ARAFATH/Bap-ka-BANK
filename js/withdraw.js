//step-1 get add elemet event handler with the withdraw button
//step-2 get the ammount from input field
//step-2.5 make sure to covert  input a number by using parseFloat
//step-3 get previous withdraw total
//step-4 calculate withdraw total
//step-5 set total withdraw ammount
//step-6 get previous balance total
//step-6.5 calculate new balance total
//step-7 set the new balance total
//step-8 clear the input field

//step-1
document.getElementById("btn-withdraw").addEventListener("click", function () {
  //step-2
  const withdrawField = document.getElementById("withdraw-field");

  const newWithdrawAmountString = withdrawField.value;

  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  // step-7 clear the input field
  withdrawField.value = "";

  if (isNaN(newWithdrawAmount)) {
    alert("please provide a number");
    return;
  }

  //step-3
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  //step-5 Get balance current total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // step-7 clear the input field
  withdrawField.value = "";

  if (newWithdrawAmount > previousBalanceTotal) {
    alert("bap ar bank aa ayto taka nai");
    return;
  }

  //step-4 calculate total withdraw ammount
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  //step-6 calculate current balance

  const newBalanceTotal = newWithdrawAmount - previousBalanceTotal;
  //set the balance total
  balanceTotalElement.innerText = newBalanceTotal;
});
