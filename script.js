let size = 16;
const gridContainer = document.querySelector('.grid-container');
const scale = document.getElementById("scale");

function setupGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridContainer.appendChild(gridElement)
    }
}

scale.onchange = function() {
    const size = this.value;
    gridContainer.innerHTML = '';
    setupGrid(size);
}
