const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.body;
const darkModeStylesheet = document.querySelector('#dark-mode-stylesheet');

// Function to toggle dark mode
function toggleDarkMode() {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    darkModeStylesheet.disabled = true;
  } else {
    body.classList.add('dark-mode');
    darkModeStylesheet.disabled = false;
  }
}

// Event listener for dark mode toggle button
darkModeToggle.addEventListener('click', toggleDarkMode);
