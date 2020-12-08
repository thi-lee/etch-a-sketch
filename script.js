let container = document.querySelector('.container');

for (i = 1; i <= 16; i++) {
    for (j = 1; j <= 16; j++) {
        let grid = document.createElement('DIV');
        grid.className = j;
        grid.textContent = i * j;
        container.appendChild(grid);
        if (j % 2 == 0) {
            grid.style.cssText = "background:lightyellow"
        }
    }
}
