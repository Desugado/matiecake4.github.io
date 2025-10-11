// This file contains the JavaScript code for the website. 
// It may include functionality such as event handling, DOM manipulation, and other interactive features.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready!');

    // Example: Add a click event listener to a button
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', () => {
            alert('Button was clicked!');
        });
    }

    // Additional JavaScript functionality can be added here
});