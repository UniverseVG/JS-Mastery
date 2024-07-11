const cards = document.querySelectorAll(".card");
const cardContainer = document.querySelector(".card-container");

const lastCard = document.querySelector(".card:last-child");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      //   if (entry.isIntersecting) observer.unobserve(entry.target);
    });
    //   console.log(entries);
  },
  {
    threshold: 1,
    // rootMargin: "-100px",
  }
);

const lastCardObserver = new IntersectionObserver((entries) => {
  const lastCard2 = entries[0];
  if (!lastCard2.isIntersecting) return;
  loadNewCards();
  lastCardObserver.unobserve(lastCard2.target);
  lastCardObserver.observe(lastCard);
}, {
  rootMargin: "100px",
});

lastCardObserver.observe(lastCard);

cards.forEach((card) => {
  observer.observe(card);
});

function loadNewCards() {
  for (let i = 0; i < 10; i++) {
    const card = document.createElement("div");
    card.textContent = "New card";
    card.classList.add("card");
    observer.observe(card);
    cardContainer.append(card);
  }
}
