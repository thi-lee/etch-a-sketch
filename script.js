let container = document.querySelector('.container');

function makeRows(rows, cols) {
    for (c = 1; c <= (rows * cols); c++) {
      let cell = document.createElement("div");
    //   cell.textContent = c;
    //   if (c % 5 == 0) {
    //       cell.style.cssText = "background: lightcyan;"
    //   } else if (c % 3 == 0) {
    //       cell.style.cssText = "background: lightblue;"
    //   }
      container.appendChild(cell).className = "grid-item";
    };
  };
  
  makeRows(16, 16);
