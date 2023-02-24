const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");

  const listEl = ingredients.map((ingredient) => {
    const listEl = document.createElement("li");
    listEl.classList.add("item");
    listEl.textContent = ingredient;
    return listEl;
  });

  ingredientsEl.append(...listEl);

  console.log(ingredientsEl);
