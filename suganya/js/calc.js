// Author: suganya
// Project-start-date: 02/06/2022
// Project-end-date: 04/06/2022

// dark mode js

let color = ["black", "wheat"];
let i = 0;
document.querySelector("button").addEventListener("click", function () {
  i = i < color.length ? ++i : 0;
  document.querySelector("body").style.background = color[i];
});
// red clr theme code

let red = document
  .getElementById("color_red")
  .addEventListener("click", function () {
    document.body.style.background = "linear-gradient(-45deg,#b721ff, #21d4fd)";
    let clr = document.querySelectorAll("#btn");
    for (let i = 0; i < clr.length; i++) {
      clr[i].style.color = "#21d4fd";
    }
    let bgclr = document.querySelectorAll("#btn");
    for (let i = 0; i < bgclr.length; i++) {
      bgclr[i].style.background = "#b721ff";
    }
  });

// green clr theme code

let green = document
  .getElementById("color_green")
  .addEventListener("click", function () {
    document.body.style.background =
      "linear-gradient(-45deg, #08F576, #D4ED0E)";
    let clr = document.querySelectorAll("#btn");
    for (let i = 0; i < clr.length; i++) {
      clr[i].style.color = "#D4ED0E";
      let bgclr = document.querySelectorAll("#btn");
      for (let i = 0; i < bgclr.length; i++) {
        bgclr[i].style.background = "#08F576";
      }
    }
  });

// yellow clr theme code

let yellow = document
  .getElementById("color_yellow")
  .addEventListener("click", function () {
    document.body.style.background =
      "linear-gradient(-45deg, #2BD2FF, #2BFF88)";
    let clr = document.querySelectorAll("#btn");
    for (let i = 0; i < clr.length; i++) {
      clr[i].style.color = "#2BFF88";
      let bgclr = document.querySelectorAll("#btn");
      for (let i = 0; i < bgclr.length; i++) {
        bgclr[i].style.background = "#2BD2FF";
      }
    }
  });

// drop down js

drop = () => {
  let drop = document.getElementById("drop_down");
  if (drop.style.display === "block") {
    drop.style.display = "none";
  } else {
    drop.style.display = "block";
  }
};
