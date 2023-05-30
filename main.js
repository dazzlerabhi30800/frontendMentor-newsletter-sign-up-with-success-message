const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const front = document.querySelector(".front");
const back = document.querySelector(".back");
const dismissBtn = document.querySelector(".dismiss");
const inputContainer = document.querySelector(".input--container");

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.onsubmit = (e) => {
  e.preventDefault();
  if (emailInput.value.match(mailformat)) {
    inputContainer.classList.remove("error");
    front.classList.add("hide");
    back.classList.add("show");
  } else {
    inputContainer.classList.add("error");
  }
};

dismissBtn.onclick = () => {
  back.classList.remove("show");
  setTimeout(() => {
    front.classList.remove("hide");
  }, 200);
};
