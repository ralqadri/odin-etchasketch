const gridContainer = document.querySelector(".grid-container");

let gridItem = document.createElement("div");
gridItem.classList.add("grid-item");



column: for (let i = 0; i < 16; i++) {
    let currentGridColumn = makeGridColumn();
    gridContainer.appendChild(currentGridColumn);
    row: for (let j = 0; j < 16; j++) {
        let currentGridItem = makeGridItem();
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