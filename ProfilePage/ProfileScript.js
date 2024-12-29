// Add event listeners for the view profile buttons
document.querySelectorAll(".view-profile").forEach((button) => {
  button.addEventListener("click", function () {
    const card = this.closest(".card");
    card.style.transform = "rotateY(180deg)"; // Flip the card
  });
});

// Add event listeners for the close buttons
document.querySelectorAll(".close-profile").forEach((button) => {
  button.addEventListener("click", function () {
    const card = this.closest(".card");
    card.style.transform = "rotateY(0deg)"; // Flip the card back
  });
});
