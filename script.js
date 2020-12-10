let container = document.querySelector('.container');

let rows = 16;

function makegrid(rows) {
  container.style.gridTemplateColumns = (`repeat(${rows}, 1fr`);
  container.style.gridTemplateRows = (`repeat(${rows}, 1fr`);
  for (i = 1; i <= rows * rows; i++) {
    let cell = document.createElement('div');
    container.appendChild(cell).classList.add('grid-item',i);
  }
}

makegrid(rows);









// let container = document.querySelector('.container');
// let main = document.querySelector('.main');
// let rset = document.createElement('button');

// function makeRows(rows, cols) {
//   for (c = 1; c <= (rows * cols); c++) {
//     let cell = document.createElement("div");
//     container.appendChild(cell).className = "grid-item";
//   }
//   let cells = document.querySelectorAll('.grid-item');
//   cells.forEach((cell) => {

//   })
// })}

// // rset button
// rset.textContent = 'CLEAR';
// rset.style.cssText = 'background: lightcyan';
// main.insertBefore(rset, container).className = 'rset';

// rset.addEventListener('click', function() {
//   let rows = prompt('How many squares per side? 1 - 100', '')
//   makeRows(rows, rows)
// })
