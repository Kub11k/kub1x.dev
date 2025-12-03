document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Default theme: dark
  body.classList.remove('light');

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light');
    toggleBtn.textContent = body.classList.contains('light') 
      ? "Toggle Dark Mode" 
      : "Toggle Light Mode";
  });
});