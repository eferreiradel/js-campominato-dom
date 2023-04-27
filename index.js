console.log("check -- ok");

//input
let gridContainer = document.querySelector("#gridContainer");
let generateGrid = document.querySelector("#generateGrid");
let resetGrid = document.querySelector("#resetGrid");
let setLevel = document.querySelector("#setLevel");

generateGrid.addEventListener("clck", gridInit());
function gridInit() {
  let gridItem = document.createElement("div");
  gridItem.classList.add("grid--item");

  console.log("ada");
  gridContainer.appendChild(gridItem);
}

function generateRandomInt() {
  let randomNumber = Math.floor(Math.random() * 100 + 1);
  return randomNumber;
}
