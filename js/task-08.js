const formEl = document.querySelector(".login-form");

const checkSubmit = (event) => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all fields (Пожалуйста, заполните все поля)");
  }

  const result = { email: email.value, password: password.value };
  console.dir(result);
  event.currentTarget.reset();
}

formEl.addEventListener("submit", checkSubmit);
