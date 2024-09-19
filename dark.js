const darkModeToggle = document.getElementById('dark-mode-toggle');
const html = document.documentElement;

darkModeToggle.addEventListener('click', () => {
  html.classList.toggle('dark');
  localStorage.setItem('darkMode', html.classList.contains('dark'));
});

// Check if dark mode is enabled on page load
if (localStorage.getItem('darkMode') === 'true') {
  html.classList.add('dark');
}