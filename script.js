const getStarted = document.getElementById("getStarted");

getStarted.addEventListener("click", () => {
  document.getElementById("trending").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".sign-in").addEventListener("click", () => {
  alert("Demo mode only — this project does not have a real sign-in system.");
});

document.querySelectorAll(".movie-card").forEach(card => {
  card.addEventListener("click", () => {
    const title = card.querySelector("img").alt.replace(" demo poster", "");
    alert("Demo selection: " + title);
  });
});