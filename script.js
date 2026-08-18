const searchInput = document.getElementById("searchInput");
const movieCards = document.querySelectorAll(".movie-card");

searchInput.addEventListener("input", function () {

  const searchValue = this.value.toLowerCase().trim();

  movieCards.forEach(card => {

    const title = card
      .querySelector(".movie-title")
      .textContent
      .toLowerCase();

    if (title.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }

  });

});


/* PLAY BUTTON */

const playButton = document.querySelector(".play-btn");

playButton.addEventListener("click", () => {

  alert("▶ Starting The Last Adventure...");

});


/* MORE INFO */

const infoButton = document.querySelector(".info-btn");

infoButton.addEventListener("click", () => {

  alert(
    "The Last Adventure\n\n" +
    "Genre: Action / Adventure\n" +
    "Duration: 2h 18m"
  );

});


/* MOVIE CLICK */

movieCards.forEach(card => {

  card.addEventListener("click", () => {

    const title =
      card.querySelector(".movie-title").textContent;

    alert("You selected: " + title);

  });

});