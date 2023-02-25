const InputEl = document.querySelector("#validation-input");
InputEl.addEventListener("blur", newBlur);


function newBlur (event) {
  const inputRef = event.currentTarget;
  const inputLength = Number(inputRef.dataset.length);


  if (inputRef.value.length !== inputLength) {

    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");

  } else {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  }
}
