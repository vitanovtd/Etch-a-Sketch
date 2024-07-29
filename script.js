const container = document.querySelector(".container");

function createGrid(size) {
  container.innerHTML = ""; // Clear the container
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    container.appendChild(square);
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "#333"; // Change to desired hover color
    });
  }
}

createGrid(16);
