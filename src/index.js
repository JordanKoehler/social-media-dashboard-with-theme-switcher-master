const checkbox = document.querySelector("label");
const inputCheck = document.getElementById("sliderCheck");

const body = document.querySelector("body");
const socialCard = document.querySelectorAll(".social-card");
const overviewCard = document.querySelectorAll(".overview-card");
console.log(slider);

checkbox.addEventListener("click", function () {
  if ((inputCheck.checked = false)) inputCheck.checked = true;

  //once checked slider moves
  inputCheck.checked = true;

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
