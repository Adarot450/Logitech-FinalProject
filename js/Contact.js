var Name = document.getElementById("Name");
var email = document.getElementById("email");
var form = document.getElementById("form");
var error = document.getElementById("error");
var textarea = document.getElementById("textarea");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (Name.value.length >= 10) {
    messages.push("Name must be smaller than 10 charecters");
  }

  if (textarea.value.length >= 300) {
    messages.push("Text must be smaller than 300 charecters");
  }

  if (messages.length > 0) {
    e.preventDefault();
    error.innerHTML = messages.join(", ");
  }
});
