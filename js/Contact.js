var Name = document.getElementById("Name");
var email = document.getElementById("email");
var form = document.getElementById("form");
var error = document.getElementById("error");
var textarea = document.getElementById("textarea");

form.addEventListener("submit", (e) => {
  if (Name.value.length >= 10) {
    alert("Name must be smaller than 10 charecters");
    e.preventDefault();
  }
  if (Name.value.length <= 3) {
    alert("Name must be larger than 3 charecters");
    e.preventDefault();
  }

  if (textarea.value.length >= 300) {
    alert("Text must be smaller than 300 charecters");
    e.preventDefault();
  }
});
