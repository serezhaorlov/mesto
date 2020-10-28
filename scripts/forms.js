const showError = (form, input, {inputErrorClass}) => {
  const errorElement = form.querySelector(`#${input.id}-error`);
  errorElement.textContent = input.validationMessage;
  input.classList.add(inputErrorClass);
}

const hideError = (form, input, {inputErrorClass}) => {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.remove(inputErrorClass);
  errorElement.textContent = '';
}

const checkInputValidity = (form, input, {...rest}) => {
  if (input.checkValidity()) {
    hideError(form, input, input.validationMessage, {...rest});
  } else {
    showError(form, input,{...rest});
  }
}

const buttonState = (form, saveButton, {inactiveButtonClass}) => {
  if (form.checkValidity()) {
    saveButton.classList.remove(inactiveButtonClass);
    saveButton.disabled = false;
  } else {
    saveButton.classList.add(inactiveButtonClass);
    saveButton.disabled = true;
  }
}

const setEventListeners = (form, {inputSelector, submitButtonSelector, ...rest} ) => {
  const allFormInputs = Array.from(form.querySelectorAll(inputSelector));
  const saveButton = form.querySelector(submitButtonSelector);
  buttonState(form, saveButton, {...rest});

  allFormInputs.forEach((input) => {
    input.addEventListener('input', (evt) => {
      checkInputValidity(form, evt.target, {...rest});
      buttonState(form, saveButton,{...rest});
    });
  });
}

const enableValidation = ({formSelector, ...rest}) => {
  const allForms = Array.from(document.querySelectorAll(formSelector));

  allForms.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })

    setEventListeners(form, {...rest});
  });

}

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__name',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_active',
  inputErrorClass: 'form_name_error',
  errorClass: 'form__error' //у меня не используется этот ключ в работе, не стал передавать его в функцию hide/showErrorб там реализация попроще стоит)
});

