// Get the element
const clickableDiv = document.querySelector('.creative-circles>.content');

function getCenterOfElement(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    return { centerX, centerY };
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
});