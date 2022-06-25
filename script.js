const container = document.getElementById('container');

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.innerText = '';
      container.appendChild(cell).className = "grid-item";
    };
  };
  
makeGrid(4, 4); // default size of grid

const reset = document.querySelector("body > div > div.sidebar > button");
const cells = document.querySelectorAll('.grid-item');

reset.addEventListener('click', () => {
    cells.forEach(cell => {
        cell.remove();
    });

    let x = prompt('Input a number up to 100', '');
    makeGrid(x, x);
    cells.forEach(cell => cell.addEventListener('mouseenter', changeColor));
});

cells.forEach(cell => cell.addEventListener('mouseenter', changeColor));

function changeColor(e) {
  console.log(e.target.className);
  e.target.classList.remove('grid-item');  
  e.target.classList.add('item-black');
}

// container.addEventListener('mouseenter', event   => {
//     let target = event.target;
//     console.log(target);
// });