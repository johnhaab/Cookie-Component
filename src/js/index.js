let popupCard = document.getElementById("cookie__popup-card");
let privatePolicy = document.getElementById("privacy__policy");
let acceptBtn = document.getElementById("accept");
let denyBtn = document.getElementById("deny");

let blur = document.getElementById("blur");

let good = document.getElementById("good");
let bad = document.getElementById("bad");

let policyCard = document.getElementById("private__policy-card");
let close = document.getElementById("private__policy-close");

privatePolicy.addEventListener("click", () => {
  console.log("opened!");
  policyCard.style.display = "block";

  blur.style.filter = "blur(3px)";
  blur.style.width = "100%";
  blur.style.height = "100%";
});

close.addEventListener("click", () => {
  console.log("closed!");
  policyCard.style.display = "none";
  blur.style.filter = "none";
});

acceptBtn.addEventListener("click", () => {
  good.style.display = "block";

  setInterval(() => {
    good.style.display = "none";
  }, 1500);
});

denyBtn.addEventListener("click", () => {
  bad.style.display = "block";

  setInterval(() => {
    bad.style.display = "none";
  }, 1500);
});

const btnClickEvent = () => {
  console.log("clicked!!");
  popupCard.style.display = "none";
};
