function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

             const inputNumEl = document.querySelector('#controls input');
             const boxesEl = document.querySelector('#boxes');
             const btnCreate = document.querySelector('[data-create]');
             const btnDestroy = document.querySelector('[data-destroy]');

             boxesEl.style.cssText = "display:flex;flex-wrap:wrap; gap:5px";

             let width = 30;
             let height = 30;


                 btnCreate.addEventListener('click', event => {
                 createBoxes(inputNumEl.value);
              });
            

              const onButtonCreate = () => {
                     const newNumber = Number(inputNumEl.value);
                     if (newNumber < inputNumEl.min || newNumber > inputNumEl.max) {
                      inputNumEl.value = '';
                      return alert(
                        `Enter a number in the range ${inputNumEl.min} to ${inputNumEl.max}`,
                      );
                   };}

                  
                   btnDestroy.addEventListener('click', event => {
  
                     const divsElBoxes = boxesEl.querySelectorAll('div');
                     divsElBoxes.forEach(input => inputNumEl.remove());
                   });

                   const createBoxes = amount => {
                     const newDiv = [];

                     for (let i = 0; i < amount; i++) {
                       const createDivEl = document.createElement('div');
                       newDiv.push(createDivEl);
                     }

                     boxesEl.append(
                       ...newDiv.map(cube => {
                        cube.style.width = `${width}px`;
                        cube.style.height = `${height}px`;
                        cube.style.backgroundColor = getRandomHexColor();
                         width += 10;
                         height += 10;
                         return cube;
                       })
                     );
                   };

                   btnCreate.addEventListener('click', onButtonCreate);
                
