let time = document.getElementById("time");
let date = document.getElementById("date");
let formatBtn = document.getElementById("formatBtn");
let is24Hour = false; 

function updateClock(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    if (is24Hour == false) {
        hours = hours % 12 || 12;
    }
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    if (is24Hour == true) {
        time.innerText = `${hours}:${minutes}:${seconds}`;
    } else {
        time.innerText = `${hours}:${minutes}:${seconds} ${ampm}`;
    }
    date.innerText = now.toDateString();
}
updateClock();
setInterval(updateClock, 1000);