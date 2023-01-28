const container = document.getElementById('container');

function makeGrid(rows, columns) {
    if (rows < 0) {
        rows = 1;
        columns = 1;
        makeGrid(rows, columns);
    }
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', columns);
    for (c = 0; c < (rows * columns); c++) {
      let cell = document.createElement("div");
      cell.innerText = '';
      container.appendChild(cell).className = "grid-item";
      cell.addEventListener('mouseenter', changeColor);
    };
};
  
makeGrid(4, 4); // default size of grid
gridSize = 4

const changeSize = document.querySelector("#change-size");
const sizeInput = document.getElementById('grid-size');

changeSize.addEventListener('click', () => {
    const cells = document.querySelectorAll('.grid-item');
    cells.forEach(cell => {
        cell.remove();
    });

    gridSize = sizeInput.value
    if (gridSize > 99) {
      alert('Sorry, too big. Try a number below 100. Gets too laggy!')
    } else {
      makeGrid(gridSize, gridSize);
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
  e.target.classList.add('item-black');
};
