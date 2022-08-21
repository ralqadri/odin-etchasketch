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

function updateGridSize() {
    const newGridSize = this.value;
    gridValue.textContent = `${gridSlider.value} x ${gridSlider.value}`;
    makeGridCanvas(newGridSize);
}

function changeToBlack() {
    if (!this.classList.contains("color")) this.classList.add("color");
    this.classList.add("color-black");
}

function eraseColor() {
    this.classList.remove("color");
}

// I wanted to make this fully random RGB values but when I looked at other examples they're too ugly. Joined with the fact that I'm lazy I'm just gonna use hardcoded palettes which are infinitely prettier 
function changeToRandom() {
    let rng = Math.floor(Math.random() * 5); // gets random number from 0-4

    this.classList.remove("color-black");
    this.classList.remove("color-shade");
    if (!this.classList.contains("color")) this.classList.add("color");
    switch (rng) {
        case 1:
            this.classList.add("color-yellow");
            break;
        case 2:
            this.classList.add("color-orange");
            break;
        case 3:
            this.classList.add("color-pink");
            break;
        case 4:
            this.classList.add("color-purple");
            break;
        default:
            this.classList.add("color-blue");
            break;
    }
}

function changeToShade() {
    if (!this.classList.contains("color")) this.classList.add("color");
    this.classList.add("color-shade");
}

// These switchToColor functions could've been cleaner/more clever but maybe next time. There's probably a way to make it into only one function too
function switchToBlack() {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((gridItem) => {
        gridItem.removeEventListener("mouseover", changeToRandom);
        gridItem.removeEventListener("mouseover", eraseColor);
        gridItem.addEventListener("mouseover", changeToBlack);
    })
}

function switchToEraser() {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((gridItem) => {
        gridItem.removeEventListener("mouseover", changeToBlack);
        gridItem.removeEventListener("mouseover", changeToRandom);
        gridItem.addEventListener("mouseover", eraseColor);
    })
}

function switchToRandom() {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((gridItem) => {
        gridItem.removeEventListener("mouseover", changeToBlack);
        gridItem.removeEventListener("mouseover", eraseColor);
        gridItem.addEventListener("mouseover", changeToRandom);
    })
}

function switchtoShade() {
    console.log("shade");
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((gridItem) => {
        gridItem.removeEventListener("mouseover", changeToBlack);
        gridItem.removeEventListener("mouseover", eraseColor);
        gridItem.removeEventListener("mouseover", changeToRandom);
        gridItem.addEventListener("mouseover", changeToShade);
    })
}


// Initializing grid canvas at first run
const gridContainer = document.querySelector(".grid-container");
makeGridCanvas();

// Black button
const blackButton = document.querySelector(".btn-black");
blackButton.addEventListener("click", switchToBlack);

// Eraser button
const eraserButton = document.querySelector(".btn-eraser");
eraserButton.addEventListener("click", switchToEraser);

// Random button
const randomButton = document.querySelector(".btn-random");
randomButton.addEventListener("click", switchToRandom);

// // Shade button
// const shadeButton = document.querySelector(".btn-shade");
// shadeButton.addEventListener("click", switchtoShade);

// Grid size: slider & value(s)
const gridSlider = document.querySelector(".btn-gridsize");
gridSlider.addEventListener("change", updateGridSize);
const gridValue = document.querySelector(".value-gridsize");
gridValue.textContent = `${gridSlider.value} x ${gridSlider.value}`;