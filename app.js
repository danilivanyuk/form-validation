let email = document.querySelector(".email-register");
let password = document.querySelector(".password-register");
let password_repeat = document.querySelector(".repassword-register");
let login_btn = document.querySelector(".login-btn");

let email_error_msg =
  "Адрес электронной почты должен содержать только латинские буквы";
let password_error_msg =
  "Пароль должен содеражать только цифры и буквы латинского алфавита, и содержать от 8 до 16 символов";
let password_repeat_error_msg = "Пароли не совпадают";
login_btn.addEventListener("click", validate);

function validate() {
  removeAllErrors();
  validateEmail();
  validatePassword();
  passwordRepeatCheck();
}

function removeAllErrors() {
  let errors = document.querySelectorAll(".error");
  console.log(errors);
  errors.forEach((error) => {
    console.log(errors);
    error.remove();
  });
}
function validateEmail() {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(email.value).toLowerCase())) {
    return true;
  } else {
    // removeError(".email-container");
    appendError(".email-container", email_error_msg);
  }
}

function validatePassword() {
  if (password.value.length < 8 || password.value.length > 16) {
    // removePasswordError();
    appendError(".password-container", password_error_msg);
  }
}

function removePasswordError() {
  let container = document.querySelector(".password-container");
  console.log(container.lastElementChild);

  if (container.lastElementChild === document.querySelector(".error")) {
    container.lastElementChild.remove();
  }
}

function passwordRepeatCheck() {
  if (password.value === password_repeat.value) {
    return true;
  } else {
    appendError(".repassword-container", password_repeat_error_msg);
  }
}

function appendError(inputContainer, errorText) {
  let error = document.createElement("p");
  error.innerText = errorText;
  error.classList.add("error");
  let container = document.querySelector(inputContainer);
  container.appendChild(error);
  setTimeout(function () {
    error.remove();
  }, 4000);
}
