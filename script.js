let hoursElem = document.getElementById("hours");
let minutesElem = document.getElementById("minutes");
let secondsElem = document.getElementById("seconds");
let radioBtnElem = document.querySelector(".radio-button");
let radioBallEl = document.querySelector(".radio-ball");

radioBtnElem.addEventListener("click", () => {
    radioBallEl.classList.toggle("radio-ball-on");
})
function getalltime() {
    let newDate = new Date();
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();
    if (radioBallEl.classList.contains("radio-ball-on")) {
        hours += 12
    }
    if (hours > 12) {
        let amEl = document.getElementById("am-pm");
        hours -= 12;
        amEl.innerText = "PM"

    } else {
        amEl.innerText = "AM"
    }
    if (seconds < 10) {
        secondsElem.innerText = `0${seconds}`;
    } else {
        secondsElem.innerText = seconds;
    }

    if (minutes < 10) {
        minutesElem.innerText = `0${minutes}`;
    } else {
        minutesElem.innerText = minutes
    }

    if (hours < 10) {
        hoursElem.innerText = `0${hours}`
    } else {
        hoursElem.innerText = hours;
    }
}
setInterval(getalltime, 1000)

function blink() {
    let colinsElem = document.getElementById("colins");
    colinsElem.classList.toggle("blinkit");
}
setInterval(blink, 500);

