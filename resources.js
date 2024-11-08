// Add event listener to all H2 elements
document.querySelectorAll('.accordion h2').forEach(function(h2) {
  h2.addEventListener('click', function() {
  // Toggle the panel
  var panel = h2.nextElementSibling;
  if (panel.style.display === 'block') {
  panel.style.display = 'none';
  h2.querySelector('i').classList.remove('fa-chevron-up');
  h2.querySelector('i').classList.add('fa-chevron-down');
  } else {
  panel.style.display = 'block';
  h2.querySelector('i').classList.remove('fa-chevron-down');
  h2.querySelector('i').classList.add('fa-chevron-up');
  }
  });
});
 
function toggleMenu() {
  const menu = document.getElementById("menu");
  const menuContainer = document.querySelector(".menu-container");
  menu.classList.toggle("menu-open");
 
  // Add event listener to remove menu-open class on mouseleave
  menuContainer.addEventListener("mouseleave", function() {
   menu.classList.remove("menu-open");
  });
}
 
// Remove event listener when menu is closed to prevent multiple listeners
document.addEventListener("click", function(event) {
  if (!event.target.closest(".menu-container")) {
      const menu = document.getElementById("menu");
      const menuContainer = document.querySelector(".menu-container");
      menu.classList.remove("menu-open");
      menuContainer.removeEventListener("mouseleave", function() {});
  }
});

const hamburgerMenu = document.querySelector('.hamburger-menu');

let colors = ["#FF5733","#3498DB","#9B59B6","#1ABC9C","#E74C3C","#F1C40F","#2ECC71","#E67E22"]; /* array of colors */
let currentColorIndex = 0;

setInterval(() => {
hamburgerMenu.style.backgroundColor = colors[currentColorIndex];
currentColorIndex = (currentColorIndex + 1) % colors.length;
}, 5000); /* change color every 5 seconds */

