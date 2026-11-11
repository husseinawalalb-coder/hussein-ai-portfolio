
document.addEventListener("DOMContentLoaded", () => {

    // Animate sections when scrolling
    const sections = document.querySelectorAll(
        ".section, .hero-content"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    sections.forEach((section) => {
        section.classList.add("fade-in");
        observer.observe(section);
    });

    // Back-to-top button
    const topButton = document.createElement("button");
    topButton.textContent = "↑";
    topButton.className = "back-to-top";
    topButton.setAttribute("aria-label", "Back to top");

    document.body.appendChild(topButton);

    window.addEventListener("scroll", () => {
        topButton.classList.toggle(
            "show",
            window.scrollY > 400
        );
    });

    topButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});
