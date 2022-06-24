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
  
makeGrid(4, 4);

const reset = document.querySelector("body > div > div.sidebar > button");
const fRow = document.querySelector("#frow");
const fColumn = document.querySelector("#fcolumn");

reset.addEventListener('click', () => {
    prompt(makeGrid());
});