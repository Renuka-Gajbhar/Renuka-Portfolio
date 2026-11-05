
// ========================================
// RENUKA GAJBHAR - DARK / LIGHT MODE
// Interactive Portfolio Website
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // 1. Select navigation
    const navigation = document.querySelector(".hero-nav");

    // 2. Create theme toggle button
    const themeButton = document.createElement("button");

    themeButton.id = "theme-toggle";
    themeButton.type = "button";
    themeButton.setAttribute("aria-pressed", "false");

    // 3. Read saved theme from Local Storage
    let savedTheme = localStorage.getItem("portfolioTheme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }

    // 4. Update button text
    function updateThemeButton() {

        const isLightMode = document.body.classList.contains("light-mode");

        if (isLightMode) {
            themeButton.textContent = "🌙 Dark Mode";
            themeButton.setAttribute("aria-pressed", "true");
        } else {
            themeButton.textContent = "☀️ Light Mode";
            themeButton.setAttribute("aria-pressed", "false");
        }
    }

    updateThemeButton();

    // 5. Add button to navigation
    if (navigation) {
        navigation.appendChild(themeButton);
    }

    // 6. Toggle Dark / Light Mode
    function toggleTheme() {

        document.body.classList.toggle("light-mode");

        const isLightMode = document.body.classList.contains("light-mode");

        // Save selected theme
        localStorage.setItem(
            "portfolioTheme",
            isLightMode ? "light" : "dark"
        );

        // Update button
        updateThemeButton();
    }

    // 7. Add click event listener
    themeButton.addEventListener("click", toggleTheme);

});


// Contact Form Validation
document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.querySelector(".contact-form");

    if (!contactForm) return;

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Email validation pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Name validation
        if (name === "") {
            alert("Please enter your name!");
            return;
        }

        // Email validation
        if (email === "") {
            alert("Please enter your email!");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address!");
            return;
        }

        // Message validation
        if (message === "") {
            alert("Please enter your message!");
            return;
        }

        if (message.length < 10) {
            alert("Message must contain at least 10 characters!");
            return;
        }

        // Success message
        alert("Thank you! Your message has been validated successfully.");

        contactForm.reset();

    });

});
