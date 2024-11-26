document.addEventListener("DOMContentLoaded", function() {
    console.log("Document loaded. Ready to add functionality!");
});

// Select the toggle button and the body
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved user preference in localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode'); // Set dark mode if saved preference exists
    updateDarkModeElements();
}

// Add event listener for the toggle button
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); // Toggle dark mode class

    // Update styles for other elements
    updateDarkModeElements();

    // Save user preference to localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark'); // Save dark mode preference
    } else {
        localStorage.setItem('theme', 'light'); // Save light mode preference
    }
});

// Function to update dark mode styles for specific elements
function updateDarkModeElements() {
    const sidebar = document.querySelector('.sidebar');
    const footer = document.querySelector('footer');
    const projects = document.querySelectorAll('.project');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Toggle dark mode class for sidebar and footer
    sidebar.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');

    // Toggle dark mode class for each project
    projects.forEach(project => {
        project.classList.toggle('dark-mode');
    });

    // Toggle dark mode class for each navigation link
    navLinks.forEach(link => {
        link.classList.toggle('dark-mode');
    });
}
