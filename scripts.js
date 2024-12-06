function toggleMobileMenu(){
  document.getElementById("menu").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function() {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const darkModeIcon = document.getElementById('dark-mode-icon'); // Get the moon/sun icon element
  const tooltipText = document.querySelector('.tooltip-text'); // Get the tooltip text element

  // Check the saved theme in localStorage
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    darkModeIcon.textContent = '🌞'; // Change to sun icon
    tooltipText.textContent = 'Light Mode'; // Change tooltip text to 'Light Mode'
  } else {
    document.body.classList.remove('dark-mode');
    darkModeIcon.textContent = '🌙'; // Keep moon icon
    tooltipText.textContent = 'Dark Mode'; // Change tooltip text to 'Dark Mode'
  }

  // Toggle dark mode on button click
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark'); // Save dark theme in localStorage
      darkModeIcon.textContent = '🌞'; // Change to sun icon
      tooltipText.textContent = 'Light Mode'; // Change tooltip text to 'Light Mode'
    } else {
      localStorage.setItem('theme', 'light'); // Save light theme in localStorage
      darkModeIcon.textContent = '🌙'; // Change back to moon icon
      tooltipText.textContent = 'Dark Mode'; // Change tooltip text to 'Dark Mode'
    }
  });
});
