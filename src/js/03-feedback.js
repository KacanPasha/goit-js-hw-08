

import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormInput, 500));


if (JSON.parse(localStorage.getItem("feedback-form-state"))) {
  const formData = JSON.parse(localStorage.getItem("feedback-form-state"));
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

function onFormInput(event) {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  

  if (form.elements.email.value === '' || form.elements.message.value === '') {
    return alert("Please fill in all fields before submitting");
  }


  const storedFormData = JSON.parse(localStorage.getItem("feedback-form-state"));
  console.log(storedFormData);

 
  localStorage.removeItem('feedback-form-state');
  form.reset();
}
