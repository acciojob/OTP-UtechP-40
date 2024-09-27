let codes = document.querySelectorAll(".code");

codes.forEach((input, index) => {
    input.addEventListener("input", () => {
        if (input.value.length === 1 && index < codes.length - 1) {
            codes[index + 1].focus(); // Move focus to next input
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && index > 0 && input.value.length === 0) {
            codes[index - 1].focus(); // Move focus to previous input
        }
    });

    // To ensure focus is correctly handled
    input.addEventListener("focus", () => {
        if (input.value.length > 0 && index < codes.length - 1) {
            codes[index + 1].focus(); // Skip to the next input if already filled
        }
    });
});

// Optional: Set focus to the first input field initially
codes[0].focus();
