const inputCheck = document.getElementById("checkbox");

const body = document.querySelector("body");
const socialCard = document.querySelectorAll(".social-card");
const overviewCard = document.querySelectorAll(".overview-card");

inputCheck.addEventListener("click", function () {
  //Text Font, background color and slider colour changes
  body.classList.toggle("darkTheme");
  socialCard.forEach(function (card) {
    card.classList.toggle("darkTheme__card");
  });
  overviewCard.forEach(function (card) {
    card.classList.toggle("darkTheme__card");
  });
});

//Get slider to move back on second click
