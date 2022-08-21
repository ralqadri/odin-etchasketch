const gridContainer = document.querySelector(".grid-container");

makeGridCanvas();

function makeGridCanvas(size = 16) {
    gridContainer.textContent = '';

    column: for (let i = 0; i < size; i++) {
        let currentGridColumn = makeGridColumn();
        gridContainer.appendChild(currentGridColumn);
        row: for (let j = 0; j < size; j++) {
            let currentGridItem = makeGridItem();
            currentGridItem.addEventListener("mouseover", changeToBlack)
            currentGridColumn.appendChild(currentGridItem);
        }
    }
}


function makeGridColumn() {
    let gridColumn = document.createElement("div");
    gridColumn.classList.add("grid-column");

    return gridColumn;
}

function makeGridItem() {
    let gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.textContent = "";

    return gridItem;
}

function changeToBlack() {
    this.classList.add("color");
    this.classList.add("color-black");
}

function eraseColor() {
    this.classList.remove("color");
}

function switchToBlack() {
    const gridItems = document.querySelectorAll(".grid-item");
    console.log("switching to black...")
    gridItems.forEach((gridItem) => {
        gridItem.removeEventListener("mouseover", eraseColor);
        gridItem.addEventListener("mouseover", changeToBlack);
    })
}

function switchToEraser() {
    const gridItems = document.querySelectorAll(".grid-item");
    console.log("switching to eraser...")
    gridItems.forEach((gridItem) => {
        gridItem.removeEventListener("mouseover", changeToBlack);
        gridItem.addEventListener("mouseover", eraseColor);
    })
}

function updateGridSize() {
    const newGridSize = this.value;
    gridValue.textContent = `${gridSlider.value} x ${gridSlider.value}`;
    makeGridCanvas(newGridSize);
}

// Black button
const blackButton = document.querySelector(".btn-black");
blackButton.addEventListener("click", switchToBlack);

// Eraser button
const eraserButton = document.querySelector(".btn-eraser");
eraserButton.addEventListener("click", switchToEraser);

// Grid size: slider & value(s)
const gridSlider = document.querySelector(".btn-gridsize");
gridSlider.addEventListener("change", updateGridSize);

const gridValue = document.querySelector(".value-gridsize");
gridValue.textContent = `${gridSlider.value} x ${gridSlider.value}`;