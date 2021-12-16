const code = document.querySelector(".code");
const $key = document.querySelector(".key");
const which = document.querySelector(".which");
const getStarted = document.querySelector(".get-started");
const boxes = document.querySelectorAll(".box");

window.addEventListener("keydown", (event) => {
  getStarted.classList.add("hide");

  boxes.forEach((box) => {
    box.classList.add("show");
  });

  if (event.code === "Space") {
    $key.textContent = "spacebar";
  } else if (event.key === "Tab") {
    event.preventDefault();
    $key.textContent = event.key;
  } else {
    $key.textContent = event.key;
  }

  which.textContent = event.which;
  code.textContent = event.code;
});
