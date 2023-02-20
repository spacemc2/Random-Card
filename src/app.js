/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  //////////////////////////////////////////////////////////////////////

  let inPuts = [];
  document
    .querySelectorAll(".form-range")[0]
    .addEventListener("input", event => {
      inPuts[0] = event.target.value;
    });
  document
    .querySelectorAll(".form-range")[1]
    .addEventListener("input", event => {
      inPuts[1] = event.target.value;
      console.log(inPuts);
    });

  document.querySelector(".createDim").addEventListener("click", () => {
    document.querySelectorAll(".icon").forEach(elem => {
      elem.style.fontSize = `${inPuts[0] * 0.15}px`;
    });
    document.querySelector(".myfont").style.fontSize = `${inPuts[0] * 0.25}px`;

    document.querySelector(".myroundedborders").style.height = `${inPuts[0]}px`;
    document.querySelector(".myroundedborders").style.width = `${inPuts[1]}px`;
  });
  ////////////////////////////////////////////////////////////////////////
  function changer() {
    let ranNum = Math.floor(Math.random() * 13 + 1);

    let lt = document.querySelector(".myfont");
    if (ranNum == 1) {
      lt.innerHTML = "A";
    } else if (ranNum == 11) {
      lt.innerHTML = "J";
    } else if (ranNum == 12) {
      lt.innerHTML = "Q";
    } else if (ranNum == 13) {
      lt.innerHTML = "K";
    } else {
      lt.innerHTML = String(ranNum);
    }
    ///////////////////////////////////////////////////////////////////////////////////
    let icons = ["♦", "♥", "♠", "♣"];
    let ranNunIcons = Math.floor(Math.random() * 4);

    document.querySelectorAll(".icon").forEach(elem => {
      if (ranNunIcons == 0 || ranNunIcons == 1) {
        elem.firstElementChild.firstElementChild.className = "text-danger px-2";
      } else {
        elem.firstElementChild.firstElementChild.className = "px-2";
      }
      elem.firstElementChild.firstElementChild.innerHTML = icons[ranNunIcons];
    });
  }
  ///////////////////////////////////////////////////////////////////////////////////////
  document.querySelector("button").addEventListener("click", () => {
    changer();
  });

  var intervalId = window.setInterval(function() {
    let counter = document.querySelector(".progress").firstElementChild;
    let perc = Number(counter.style.width.split("%")[0]);
    counter.style.width = `${perc + 1}%`;
    counter.innerHTML = `${perc + 1}%`;
    if (perc == 99) {
      changer();

      counter.style.width = `${0}%`;
      counter.innerHTML = `${0}%`;
    }
  }, 100);
};
