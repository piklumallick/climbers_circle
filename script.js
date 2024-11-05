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