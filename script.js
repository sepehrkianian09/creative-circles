// Get the element
const clickableDiv = document.querySelector('.creative-circles>.content');

/**
 * Greets a user by name and age
 * @param {number} X - coordinate X
 * @param {number} Y - coordinate Y
 * @returns {HTMLElement} The created element locating there
 */
function createElementAtCoordinates({ x, y }, { translate_x, translate_y }) {
    // Create a new div element
    const newElement = document.createElement('div');

    // Set the style to position the element at the specified coordinates
    newElement.classList.add('really-creative-circle');
    newElement.style = `--translate-x: ${translate_x}px;
    --translate-y: ${translate_y}px;`;
    newElement.textContent = "hello";
    newElement.addEventListener('click', (event) => {
        const clickedElement = event.target;

        clickedElement.remove();
    });

    return newElement;
}

// Add event listener for click event
clickableDiv.addEventListener('click', (event) => {
    // Get the element that was clicked
    const clickedElement = event.target;

    // Get the mouse position relative to the div
    const mouseX = event.offsetX; // Horizontal position of the mouse inside the element
    const mouseY = event.offsetY; // Vertical position of the mouse inside the element

    // Log the element and position of the click
    console.log('Element clicked:', clickedElement);
    console.log('Mouse position (X, Y):', mouseX, mouseY);

    clickedElement.appendChild(createElementAtCoordinates({ x: mouseX, y: mouseY }, { translate_x: mouseX - clickedElement.clientWidth / 2, translate_y: mouseY - clickedElement.clientHeight / 2 }))
});