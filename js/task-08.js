// V1.0
// const loginForm = document.querySelector(".login-form");

// loginForm.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();

//   const formData = new FormData(event.currentTarget);
//   const formObject = Object.fromEntries(formData.entries());
//   if (formObject.email === "" || formObject.password === "") {
//     alert("Всі поля повинні бути заповнені");
//   } else {
//     console.log(formObject);
//     loginForm.reset();
//   }
// }

// V2.0
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const formObject = {};

  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];
    if (element.name && element.value) {
      formObject[element.name] = element.value;
    }
  }

  if (!formObject.email || !formObject.password) {
    alert("Всі поля повинні бути заповнені");
  } else {
    console.log(formObject);
    loginForm.reset();
  }
}
