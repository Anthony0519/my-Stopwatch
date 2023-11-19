const startBtn = document.getElementById("btnStart");
const stopBtn = document.getElementById("btnStop");
const resetBtn = document.getElementById("rstBtn");
let appendMilisec = "0";
let appendSeconds = "0";
let appendMinutes = "0";
let appendHours = "0"
const milisec = document.getElementById("miliSec");
const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours")
let Interval= null;

startBtn.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer,10);
};

stopBtn.onclick = function () {
    clearInterval(Interval);
};

resetBtn.onclick = function () {
    clearInterval(Interval);
    appendMilisec = "00";
    appendSeconds = "00";
    appendMinutes = "00";
    appendHours = "00";
    milisec.innerHTML = appendMilisec;
    seconds.innerHTML = appendSeconds;
    minutes.innerHTML = appendMinutes; 
    hours.innerHTML = appendHours
};

function startTimer() {
    appendMilisec++;
    if (appendMilisec <= 9){
        milisec.innerHTML = "0" + appendMilisec;
    };
    if (appendMilisec > 9){
        milisec.innerHTML = appendMilisec;
    };
    if (appendMilisec > 99){
        appendMilisec = 0;
        milisec.innerHTML = "0" + 0;
        appendSeconds++;
        seconds.innerHTML = "0" + appendSeconds;
    };
    if (appendSeconds > 9){
        seconds.innerHTML =  appendSeconds;
    };
    if (appendSeconds > 59){
        appendSeconds = 0;
        seconds.innerHTML = "0" + "0"
        appendMinutes++;
        minutes.innerHTML = "0" + appendMinutes;
    };
    if (appendMinutes > 9){
        minutes.innerHTML =  appendMinutes;
    }
    if (appendMinutes > 59){
        appendMinutes = 0;
        minutes.innerHTML = "0" + 0;
        appendHours++;
        hours.innerHTML = "0" + appendHours;
    }
    if (appendHours > 9){
        hours.innerHTML = appendHours;
    }
}