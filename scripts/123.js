const showInputError = (form, input, {inputErrorClass}) => {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(inputErrorClass);
};

const hideInputError = (form, input, {inputErrorClass}) => {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.remove(inputErrorClass);
  errorElement.classList.remove(inputErrorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (form, input) => {
  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage,  {...rest});
  } else {
    hideInputError(form, input, {...rest});
  }
};

const setEventListeners = (form, {inputSelector, submitButtonSelector, ...rest}) => {
  const allFormInputs = Array.from(form.querySelectorAll(inputSelector));
  const saveButton = form.querySelector(submitButtonSelector);
  toggleButtonState(form, saveButton,{...rest});

  allFormInputs.forEach((input) => {
    input.addEventListener('input', function () {
      checkInputValidity(form, input, {...rest});
      toggleButtonState(form, saveButton,{...rest});
    });
  });
};

const enableValidation = ({formSelector, ...rest}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((form) => {
    form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(form, {...rest});

  });
};

const hasInvalidInput = (form) => {
  return form.some((input) => {
    return !input.validity.valid;
  })
};

const toggleButtonState = (allFormInputs,saveButton, {inactiveButtonClass, ...rest}) => {
  if(hasInvalidInput(allFormInputs)) {
    saveButton.classList.add(inactiveButtonClass);
  } else {
    saveButton.classList.remove(inactiveButtonClass);
  }
}

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__name',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_active',
  inputErrorClass: 'form_name_error',
  errorClass: 'form__error' //у меня не используется этот ключ в работе, не стал передавать его в функцию hide/showErrorб там реализация попроще стоит)
});



