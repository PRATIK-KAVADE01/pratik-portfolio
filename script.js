<script>
const toggleBtn = document.querySelector(".toggle");

// Dark mode toggle
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "☀ Light Mode";
    } else {
        toggleBtn.textContent = "🌙 Dark Mode";
    }
});

// Scroll reveal animation
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const boxTop = section.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
</script>
