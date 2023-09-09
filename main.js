let day = document.querySelector("#day");
let hour = document.querySelector("#hour");
let minut = document.querySelector("#minut");
let second = document.querySelector("#second");

let deadline = "2023-09-16 18:30";

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

setInterval(() => {
  day.innerHTML = getTimeRemaining(deadline).days;
  hour.innerHTML = getTimeRemaining(deadline).hours;
  minut.innerHTML = getTimeRemaining(deadline).minutes;
  second.innerHTML = getTimeRemaining(deadline).seconds;
}, 1000);

// music

let audio = document.querySelector("#player");
let controler = document.querySelector("#music_controler");

controler.onclick = () => {
  if (audio.className.includes("playing")) {
    audio.pause();
    audio.classList.remove("playing");
  } else {
    audio.play();
    audio.classList.add("playing");
  }
};

// preload

let preload = document.querySelector("#preload");
let contener = document.querySelector(".contener")

window.onload = function (e) {
    setTimeout(() => {
      preload.style.opacity = 0;
	    window.scrollTo(0,0)
    }, 1000)
}

setTimeout(() => {
  preload.style.display = "none";
}, 4000)


