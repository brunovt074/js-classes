
document.querySelectorAll(".blurred").forEach((block) => {
    block.addEventListener("click", () => {
        block.classList.add("revealed");
    });
});