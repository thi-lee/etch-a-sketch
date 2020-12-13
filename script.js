let container = document.querySelector('.container');
let instructions = document.querySelector('.instructions');
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");

let rset = document.createElement('button'); rset.textContent = 'Reset';
let color = document.createElement('button'); color.textContent = 'Color';
let opache = document.createElement('button'); opache.textContent = 'Opache';
let rainbow = document.createElement('button'); rainbow.textContent = 'Rainbow';

instructions.appendChild(rset).classList.add('rset');
instructions.appendChild(color).classList.add('color');
instructions.appendChild(opache).classList.add('opache');
instructions.appendChild(rainbow).classList.add('rainbow');

let subColor = document.querySelector('.color');
let chooseColor = document.createElement('input');
chooseColor.type = 'color';
chooseColor.value = '#5e7783';
subColor.appendChild(chooseColor);

let newSet = true;
if (newSet) {
  makegrid(16);
  setHover();
}

output.textContent = slider.value;
slider.addEventListener('input', function() {
  output.textContent = this.value;
})

rset.addEventListener('click', function() {
  rSetHover(slider.value, rset.className);
})

color.addEventListener('click', function() {
  rSetHover(slider.value, color.className);
})

opache.addEventListener('click', function() {
  rSetHover(slider.value, opache.className);
})

rainbow.addEventListener('click', function() {
  rSetHover(slider.value, rainbow.className);
})


// functions
function clearAll() {
  container.innerHTML = ' ';
}

function makegrid(rows) {
  clearAll()
  container.style.gridTemplateColumns = (`repeat(${rows}, 1fr`);
  container.style.gridTemplateRows = (`repeat(${rows}, 1fr`);
  for (i = 1; i <= rows * rows; i++) {
    let cell = document.createElement('div');
    container.appendChild(cell).classList.add('grid-item', i);
  }
  if (newSet) {newSet = false;}
  return newSet;
}

function setHover(buttonClass) {
  let cells = document.querySelectorAll('.grid-item');
  cells.forEach((cell) => {
    cell.addEventListener('mouseover', function() {
      switch(buttonClass) {
        case ('rset') :
          cell.style.backgroundColor = 'white';
          break;
        case('color'):
          cell.style.backgroundColor = chooseColor.value;
          break;
        case('opache'):
          cell.style.backgroundColor = 'blue';
          break;  
        case('rainbow'):
          let randomColor = Math.floor(Math.random()*16777215).toString(16);
          cell.style.backgroundColor = "#" + randomColor;
          break;
        default: 
          cell.style.backgroundColor = 'black';
      }
    })
  })
}

function rSetHover(rows, buttonClass) {
  let cells = document.querySelectorAll('.grid-item');
  if (buttonClass == 'rset') {
    cells.forEach((cell) => {
      cell.classList.remove('hovering');
    })
    newSet = makegrid(rows);
    makegrid(rows);
    setHover(buttonClass);
  } else {
    setHover(buttonClass);
  }

}