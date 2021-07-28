const clock = document.getElementById("clock");

function updateTime() {
    let currentDate = new Date();
    let currentTime = currentDate.toLocaleTimeString();
    clock.innerHTML = currentTime;
}

