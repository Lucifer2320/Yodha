document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Fade-in animation on scroll
    const fadeInElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeInElements.forEach(element => observer.observe(element));

    // Mobile menu toggle
    const menuToggle = document.createElement("div");
    menuToggle.className = "menu-toggle";
    menuToggle.innerHTML = "☰";
    document.querySelector("header").appendChild(menuToggle);

    const nav = document.querySelector("nav ul");
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // Adjust navigation on resize
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            nav.classList.remove("active");
        }
    });

    // Button hover effects
    document.querySelectorAll(".cta-button").forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
        });
        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
        });
    });

    // Program box hover effect
    document.querySelectorAll(".program-box").forEach(box => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "#ff0000";
        });
        box.addEventListener("mouseout", () => {
            box.style.backgroundColor = "#222";
        });
    });
});
