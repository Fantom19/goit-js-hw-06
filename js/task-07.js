const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", textEnlargement);

const  textEnlargement = (event) => {
  textEl.style.fontSize = `${event.target.value}px`;
}