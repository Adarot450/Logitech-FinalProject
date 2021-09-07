var Name = document.getElementById("Name");
var email = document.getElementById("email");
var form = document.getElementById("form");
var error = document.getElementById("error");
var textarea = document.getElementById("textarea");

form.addEventListener("submit", (e) => {
  var emailValue = email.value;
  if (Name.value.length >= 11) {
    alert("Name must be smaller than 10 charecters");
    e.preventDefault();
  } else if (Name.value.length <= 2) {
    alert("Name must be larger than or equal to 3 charecters");
    e.preventDefault();
  } else if (emailValue.includes("@") == false) {
    alert("Email is incorrect");
    e.preventDefault();
  } else if (emailValue.includes(".com") == false) {
    alert("Email is incorrect");
    e.preventDefault();
  } else if (textarea.value.length >= 300) {
    alert("Text must be smaller than 300 charecters");
    e.preventDefault();
  }
});
