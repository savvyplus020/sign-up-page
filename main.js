const button = document.querySelector(".action button");
const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm-password");
button.addEventListener("click", () => {
  if (password.value == confirm.value) return;
  else {
    document.querySelector(".error").textContent = "passwords do not match";
    document.querySelector(".error").style.display = "block";
    password.value = "";
    confirm.value = "";
  }
});
