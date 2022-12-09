const gridContainer = document.querySelector('.grid-container');
const scale = document.getElementById("scale");
const clearBtn = document.querySelector('.clear-btn');

// neat trick from michalosman
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function setupGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mousedown', changeColor)
        gridElement.addEventListener('mouseover', changeColor)
        gridContainer.appendChild(gridElement)
    }
}

clearBtn.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    setupGrid(scale.value)
})

scale.onchange = function() {
    const size = this.value;
    gridContainer.innerHTML = '';
    setupGrid(size);
}

function randomColorGenerator() {
    const colorList = []
    for (let i = 0; i < 3; i++) {
        colorList.push(Math.floor(Math.random() * 255))
    }
    return colorList
}

function changeColor(e) {
    if (e.type == "mouseover" && !mouseDown) return;
    const gridElement = e.target;
    const colorList = randomColorGenerator()
    gridElement.style.backgroundColor = 'rgb(' + colorList.join(',') + ')';
}

window.onload = () => {
    setupGrid(scale.value)
}
