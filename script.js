const emailInput = document.getElementById("emailInput");
const getStarted = document.getElementById("getStarted");

getStarted?.addEventListener("click", () => {
  const email = emailInput.value.trim();
  if (!email) {
    emailInput.focus();
    alert("Please enter your email address.");
    return;
  }
  if (!email.includes("@") || !email.includes(".")) {
    emailInput.focus();
    alert("Please enter a valid email address.");
    return;
  }
  alert("Demo only: welcome to Netflix Clone!");
});

document.querySelector(".sign-in")?.addEventListener("click", () => {
  alert("Demo Sign In");
});

document.querySelectorAll(".movie-card").forEach(card => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");
    alert("Selected: " + (img?.alt || "Title"));
  });
});