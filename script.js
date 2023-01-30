const container = document.getElementById('container');

// Makes a grid of squares without color

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

const changeSize = document.querySelector("#change-size");
const inputField = document.getElementById('grid-size-input');

// Change size button

changeSize.addEventListener('click', () => {
  let x = inputField.value;
  if (x == gridSize) {
    return;
  } else {
    const cells = document.querySelectorAll('.grid-item');
    cells.forEach(cell => {
        cell.remove();
    });
    makeGrid(x, x);
    gridSize = x;
  }
});

const reset = document.querySelector(("#reset"));

// Reset button

reset.addEventListener('click', () => {
  const cells = document.querySelectorAll('.grid-item')
  cells.forEach(cell => {
    cell.remove();
  });

  makeGrid(gridSize, gridSize);
});

// Color

function changeColor(e) {
  let colors = document.querySelector("#colors").value
  switch (colors) {
    case 'item-black':
      e.target.classList.add('item-black');
      break;
    case 'item-red':
      e.target.classList.add('item-red');
      break;
    case 'item-blue':
      e.target.classList.add('item-blue');
      break;
    case 'item-green':
      e.target.classList.add('item-green');
      break;
    case 'item-purple':
      e.target.classList.add('item-purple');
      break;
    default:
      console.log("bug in function changeColor switch statement")
      break;
  }
}

// Driver code

makeGrid(4, 4); // default size of grid
gridSize = 4