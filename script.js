let startTime;
let running = false;
let lapCounter = 1;

function startStop() {
    if (running === false) {
        startTime = new Date().getTime();
        running = true;
        document.getElementById("startStop").innerHTML = "Pause";
        update();
    } else {
        running = false;
        document.getElementById("startStop").innerHTML = "Start";
    }
}

function lapReset() {
    if (running === false) {
        document.getElementById("display").innerHTML = "00:00:00";
        lapCounter = 1;
        document.getElementById("laps").innerHTML = "";
    } else {
        let lapTime = new Date().getTime() - startTime;
        let formattedTime = formatTime(lapTime);
        let lap = document.createElement("div");
        lap.innerHTML = "Lap " + lapCounter + ": " + formattedTime;
        document.getElementById("laps").appendChild(lap);
        lapCounter++;
    }
}

function update() {
    if (running === true) {
        let currentTime = new Date().getTime();
        let elapsedTime = currentTime - startTime;
        document.getElementById("display").innerHTML = formatTime(elapsedTime);
        setTimeout(update, 10);
    }
}

function formatTime(time) {
    let hours = Math.floor(time / (1000 * 60 * 60));
    let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((time % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((time % 1000) / 10);

    return (
        (hours < 10 ? "0" : "") +
        hours +
        ":" +
        (minutes < 10 ? "0" : "") +
        minutes +
        ":" +
        (seconds < 10 ? "0" : "") +
        seconds +
        "." +
        (milliseconds < 10 ? "0" : "") +
        milliseconds
    );
}

document.getElementById("startStop").addEventListener("click", startStop);
document.getElementById("lapReset").addEventListener("click", lapReset);
