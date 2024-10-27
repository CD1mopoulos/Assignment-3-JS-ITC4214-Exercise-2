document.addEventListener("DOMContentLoaded", () => {
    const colorCells = document.querySelectorAll(".color-cell");
    const message = document.getElementById("message");
    const colorHistory = document.getElementById("colorHistory");

    colorCells.forEach(cell => {
        cell.addEventListener("click", () => {
            const color = cell.getAttribute("data-color");

            // Update "Hello world!" message color
            message.style.color = color;

            // Add color to history list
            const listItem = document.createElement("li");
            listItem.textContent = color;
            listItem.style.color = color;
            colorHistory.appendChild(listItem);
        });
    });
});
