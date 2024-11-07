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

