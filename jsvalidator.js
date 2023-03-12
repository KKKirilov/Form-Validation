function validateForm() {
  var fnameField = document.getElementById("fname").value;
  var lnameField = document.getElementById("lname").value;
  var egnField = document.getElementById("egn").value;
  var ageField = document.getElementById("age").value;
  var adressField = document.getElementById("adress").value;
  var passField = document.getElementById("pass").value;
  var cpassField = document.getElementById("cpass").value;
  var text;

  if (fnameField.length >= 1 & fnameField.length <= 15 & isNaN(fnameField)) {
    text = "valid";
    document.getElementById("spamfname").style.color = "green";
  } else {
    text = "First name must be between 1 and 15 symbols";
    document.getElementById("spamfname").style.color = "red";
  }
  document.getElementById("spamfname").innerHTML = text;

  if (lnameField.length >= 1 & lnameField.length <= 15 & isNaN(lnameField)) {
    text = "valid";
    document.getElementById("spamlname").style.color = "green";
  } else {
    text = "Last name must be between 1 and 15 symbols";
    document.getElementById("spamlname").style.color = "red";
  }
  document.getElementById("spamlname").innerHTML = text;

  if (egnField.length == 10 & !isNaN(egnField)) {
    text = "valid";
    document.getElementById("spamegn").style.color = "green";
  } else {
    text = "EGN must be exactly 10 digits";
    document.getElementById("spamegn").style.color = "red";
  }
  document.getElementById("spamegn").innerHTML = text;

  if (ageField >= 18 & ageField <= 118) {
    text = "valid";
    document.getElementById("spamage").style.color = "green";
  } else {
    text = "Age must be between 18 and 118";
    document.getElementById("spamage").style.color = "red";
  }
  document.getElementById("spamage").innerHTML = text;

  if (adressField.length >= 1 & adressField.length <= 100) {
    text = "valid";
    document.getElementById("spamadress").style.color = "green";
  } else {
    text = "Address must be between 1 and 100 symbols";
    document.getElementById("spamadress").style.color = "red";
  }
  document.getElementById("spamadress").innerHTML = text;

  if (passField.length >= 6 & passField.length <= 18) {
    text = "valid";
    document.getElementById("spampass").style.color = "green";
  } else {
    text = "Password must be between 6 and 18 latin characters and/or numbers";
    document.getElementById("spampass").style.color = "red";
  }
  document.getElementById("spampass").innerHTML = text;

  if (cpassField.length >= 6 & cpassField.length <= 18 & cpassField == passField) {
    text = "valid";
    document.getElementById("spamcpass").style.color = "green";
  } else {
    text = "Pasword conformation must be exactly the same as password";
    document.getElementById("spamcpass").style.color = "red";
  }
  document.getElementById("spamcpass").innerHTML = text;
}