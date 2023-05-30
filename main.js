const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const front = document.querySelector(".front");
const back = document.querySelector(".back");
const dismissBtn = document.querySelector(".dismiss");

form.onsubmit = (e) => {
  e.preventDefault();
  if (emailInput.value.match(mailformat)) {
    front.classList.add("hide");
    back.classList.add("show");
  }
  return;
};

dismissBtn.onclick = () => {
  back.classList.remove("show");
  setTimeout(() => {
    front.classList.remove("hide");
  }, 200);
};
