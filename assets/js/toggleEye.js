const iconEye = document.querySelector(".form_password .bi");
const pswInput = document.querySelector(".form_password input");
const iconEyeConfirm = document.querySelector(".form_confirm-password .bi");
const formConfirmPasswordInput = document.querySelector(
  ".form_confirm-password input"
);

function togglePasswordVisibility(icon, input) {
  if (icon.classList[1] === "bi-eye-fill") {
    icon.classList.remove("bi-eye-fill");
    icon.classList.add("bi-eye-slash-fill");
    input.setAttribute("type", "password");
  } else {
    icon.classList.add("bi-eye-fill");
    icon.classList.remove("bi-eye-slash-fill");
    input.setAttribute("type", "text");
  }
}

iconEye.addEventListener("click", function () {
  togglePasswordVisibility(iconEye, pswInput);
});

if (iconEyeConfirm !== null) {
  iconEyeConfirm.addEventListener("click", function () {
    togglePasswordVisibility(iconEyeConfirm, formConfirmPasswordInput);
  });
}