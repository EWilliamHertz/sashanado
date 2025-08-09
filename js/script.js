// js/script.js

document.addEventListener("DOMContentLoaded", function() {
    
    // Mobile Hamburger Menu Toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
        });

        // Close menu when a link is clicked
        document.querySelectorAll(".nav-links li a").forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navLinks.classList.remove("active");
            });
        });
    }

    // Active Navigation Link Highlighter
    const navAnchors = document.querySelectorAll(".nav-links a");
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    navAnchors.forEach(link => {
        const linkPath = link.getAttribute("href").split("/").pop();
        if (linkPath === currentPath) {
            link.classList.add("active");
        }
    });

});
