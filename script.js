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
});
