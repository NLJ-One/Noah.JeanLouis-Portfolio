document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("h1, h2, h4, p");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // une fois visible, on n’observe plus
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(el => {
        el.classList.add("reveal");
        observer.observe(el);
    });
});
