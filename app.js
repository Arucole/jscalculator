"use strict";

const themeToggler = document.querySelector(".theme-toggler");
const togglerIcons = document.querySelectorAll(".toggler-icons");
const paragraphs = document.querySelectorAll("p");
const divs = document.querySelectorAll("div");
const forms = document.querySelectorAll("form");
const inputs = document.querySelectorAll("input");
const body = document.querySelector("body");

const toggleColor = (newColor, oldColor, bg) => {
  if (themeToggler.classList.contains(oldColor)) {
    themeToggler.classList.add(newColor);
    themeToggler.classList.remove(oldColor);

    togglerIcons.forEach(function (t) {
      t.classList.add(newColor);
      t.classList.remove(oldColor);
    });

    paragraphs.forEach(function (p) {
      p.classList.add(newColor);
      p.classList.remove(oldColor);
    });

    divs.forEach(function (d) {
      d.classList.add(newColor);
      d.classList.remove(oldColor);
    });

    forms.forEach(function (f) {
      f.classList.add(newColor);
      f.classList.remove(oldColor);
    });

    inputs.forEach(function (i) {
      i.classList.add(newColor);
      i.classList.remove(oldColor);
    });
    body.style.backgroundColor = bg;
  }
};

themeToggler.addEventListener("click", function () {
  if (themeToggler.classList.contains("blue")) {
    toggleColor("gray", "blue", "#e6e6e6");
  } else if (themeToggler.classList.contains("gray")) {
    toggleColor("violet", "gray", "#58077d");
  } else {
    toggleColor("blue", "violet", "#3a4764");
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key == this.onclick) {
    this.onclick.display.value();
  }
});
