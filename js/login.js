//step-1 (add click event handler with submit button  )
document.getElementById("btn-submit").addEventListener("click", function () {
  //step-2 (get the email addess)
  //always remember to use .value to get text from a input field
  const emailField = document.getElementById("email-id");
  const email = emailField.value;
  //step-3.a--(get password)
  //3.b--set id on the html element
  //3.c--get the value from the element

  const passwordField = document.getElementById("password-id");
  const password = passwordField.value;

  console.log(email, password);

  //Danger--Dont not verify email password on the client server side

  //step-4 verify email password
  if (email == "mdarafatvi75@gmail.com" && password === "12345") {
    window.location.href = "bank.html";
  } else {
    alert("valid user password wrong tikh kore de");
  }
});
