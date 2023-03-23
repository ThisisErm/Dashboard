window.onload = function () { document.body.classList.remove('is-preload'); }
window.ontouchmove = function () { return false; }
window.onorientationchange = function () { document.body.scrollTop = 0; }
// Get all the li elements
const navLinks = document.querySelectorAll('nav ul li');

// Get the h1 element
const heading = document.querySelector('header h1');

// Add an event listener to each li element
navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    // Get the span element inside the a element
    const label = link.querySelector('a span');
    // Set the text content of the h1 element to the text content of the span element
    heading.textContent = label.textContent;
  });
  link.addEventListener('mouseout', () => {
    // Set the text content of the h1 element back to its original value
    heading.textContent = 'Hello, Erm';
  });
});

