import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector("input"),
    message: document.querySelector("textarea"),
    
};
returnLocalStorageData()

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
    event.preventDefault();
    const inputText = { email: refs.email.value, message: refs.message.value};
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inputText))
}

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}


function returnLocalStorageData() {
    const saveMessage = localStorage.getItem(STORAGE_KEY);
    const parseMessage = JSON.parse(saveMessage);

    if (saveMessage) {
        console.log(parseMessage);
        refs.email.value = parseMessage.email;
        refs.message.value = parseMessage.message
    }
}