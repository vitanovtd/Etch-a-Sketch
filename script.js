const container = document.querySelector(".container");
const resetButton = document.querySelector(".reset-button");

function createGrid(size) {
  container.innerHTML = "";
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    container.appendChild(square);
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "#333";
    });
  }
}

function promptForGridSize() {
  let size = parseInt(
    prompt("Enter the number of squares per side for the new grid")
  );
  if (isNaN(size) || size < 1 || size > 64) {
    alert("Please enter a number between 1 and 64");
  } else {
    createGrid(size);
  }
}

resetButton.addEventListener("click", promptForGridSize);

createGrid(16);
