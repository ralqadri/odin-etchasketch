const gridContainer = document.querySelector(".grid-container");

column: for (let i = 0; i < 16; i++) {
    let currentGridColumn = makeGridColumn();
    gridContainer.appendChild(currentGridColumn);
    row: for (let j = 0; j < 16; j++) {
        let currentGridItem = makeGridItem();
        currentGridItem.addEventListener("mouseover", changeToBlack)
        currentGridColumn.appendChild(currentGridItem);
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

const gridItems = document.querySelectorAll(".grid-item");

function changeToBlack() {
    this.classList.add("color");
    this.classList.add("color-black");
}

function eraseColor() {
    this.classList.remove("color");
}

function switchToBlack() {
    console.log("switching to black...")
    gridItems.forEach((gridItem) => {
        gridItem.removeEventListener("mouseover", eraseColor);
        gridItem.addEventListener("mouseover", changeToBlack);
    })
}

function switchToEraser() {
    console.log("switching to eraser...")
    gridItems.forEach((gridItem) => {
        gridItem.removeEventListener("mouseover", changeToBlack);
        gridItem.addEventListener("mouseover", eraseColor);
    })
}

const blackButton = document.querySelector(".btn-black");
blackButton.addEventListener("click", switchToBlack);

const eraserButton = document.querySelector(".btn-eraser");
eraserButton.addEventListener("click", switchToEraser);