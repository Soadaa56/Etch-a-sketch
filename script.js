const container = document.getElementById('container');

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.innerText = '';
      container.appendChild(cell).className = "grid-item";
      cell.addEventListener('mouseenter', changeColor);
    };
  };
  
makeGrid(4, 4); // default size of grid
gridSize = 4

const changeSize = document.querySelector("#change-size");

changeSize.addEventListener('click', () => {
    const cells = document.querySelectorAll('.grid-item');
    cells.forEach(cell => {
        cell.remove();
    });

    let x = prompt('Input a number up to 100', '');
    if (x > 100) {
      alert('Sorry, too big. Try a number below 100')
    } else {
      makeGrid(x, x);
      gridSize = x;
    }
});

const reset = document.querySelector(("#reset"));

reset.addEventListener('click', () => {
  const cells = document.querySelectorAll('.grid-item')
  cells.forEach(cell => {
    cell.remove();
  });

  makeGrid(gridSize, gridSize);
});

function changeColor(e) {
  console.log(e.target.className); 
  e.target.classList.add('item-black');
};
