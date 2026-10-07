// Mobile menu
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}


// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        document.querySelector(".nav-links").classList.remove("active");
    });

});


// Contact form
function sendMessage(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you " + name +
        "! Your message has been received."
    );

    event.target.reset();
}


// Scroll reveal animation
const cards = document.querySelectorAll(
    ".skill-card, .project-card, .about-box div"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.6s";

    observer.observe(card);

});