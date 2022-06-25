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

const reset = document.querySelector("body > div > div.sidebar > button");

reset.addEventListener('click', () => {
    const cells = document.querySelectorAll('.grid-item');
    cells.forEach(cell => {
        cell.remove();
    });

    let x = prompt('Input a number up to 100', '');
    if (x > 100) {
      alert('no, too big. Try again');
    } else makeGrid(x, x);
});

function changeColor(e) {
  console.log(e.target.className); 
  e.target.classList.add('item-black');
}
