console.log("check -- ok");

//input
let gridContainer = document.querySelector("#gridContainer");
let generateGrid = document.querySelector("#generateGrid");
let resetGrid = document.querySelector("#resetGrid");
let setLevel = document.querySelector("#setLevel");

//events
generateGrid.addEventListener("click", gridInit);
function gridInit() {
  let difficultLevel = setLevel.value;

  for (counter = 0; counter < difficultLevel; counter++) {
    let gridItem = document.createElement("div");
    gridItem.classList.add("grid--item");
    gridContainer.appendChild(gridItem);
  }
}

function generateRandomInt() {
  let randomNumber = Math.floor(Math.random() * 100 + 1);
  return randomNumber;
}

console.log("end -- ok");
