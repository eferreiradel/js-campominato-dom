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
    gridItem.classList.add("grid--item", "btn");
    gridItem.innerHTML = generateRandomInt();
    gridContainer.appendChild(gridItem);

    let listNumber = parseInt([gridItem.innerHTML]);

    if (listNumber % 3 === 0) {
      alert("eccolo");
      gridItem.classList.add("bomb");
    }
  }
}

function generateRandomInt() {
  let randomNumber = Math.floor(Math.random() * 100 + 1);
  return randomNumber;
}

console.log("check end -- ok");
