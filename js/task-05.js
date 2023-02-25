const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');


const newInput = event => {
    
    spanEl.textContent = event.currentTarget.value;

    if (event.currentTarget.value === "") {
        spanEl.textContent = "Anonymous";
    }
}

inputEl.addEventListener('input', newInput);