const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
confirmPassword.addEventListener("input", (e) => {
  if (e.target.value != password.value) {
    confirmPassword.setCustomValidity("Passwords don't match!");
  } else {
    confirmPassword.setCustomValidity("");
  }
});
