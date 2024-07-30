const container = document.querySelector(".container");
const resetButton = document.querySelector(".reset-button");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");
const submitButton = document.querySelector(".submit-button");
const gridSizeNumber = document.querySelector("#grid-size-number");

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

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function handleModalSubmit() {
  const size = parseInt(gridSizeNumber.value);
  if (isNaN(size) || size < 1 || size > 64) {
    alert("Please enter valid number from 1 to 64");
  } else {
    createGrid(size);
    closeModal();
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

resetButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
submitButton.addEventListener("click", handleModalSubmit);

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    closeModal();
  }
});

// resetButton.addEventListener("click", promptForGridSize);

createGrid(16);
