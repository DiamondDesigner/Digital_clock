
let elements = {
    hour: document.getElementById('hours'),
    minute: document.getElementById('minutes'),
    seconds: document.getElementById('seconds'),
    ampm: document.getElementById('ampm'),
}

function updateClock() {
    let hourOfTheDay = new Date().getHours();
    let minuteOfTheHour = new Date().getMinutes();
    let secondOfTheMinute = new Date().getSeconds();
    let ampm = "AM"

    if (hourOfTheDay > 12) {
        hourOfTheDay = hourOfTheDay- 12;
        ampm = "PM"
    } 
    
    hourOfTheDay = hourOfTheDay < 10 ? "0" + hourOfTheDay : hourOfTheDay
    minuteOfTheHour = minuteOfTheHour < 10 ? "0" + minuteOfTheHour : minuteOfTheHour
    secondOfTheMinute = secondOfTheMinute < 10 ? "o" + secondOfTheMinute : secondOfTheMinute 

    elements.hour.innerText = hourOfTheDay;
    elements.minute.innerText = minuteOfTheHour;
    elements.seconds.innerText = secondOfTheMinute;
    elements.ampm.innerText = ampm;
    setTimeout(() => {
        updateClock();
    }, 1000)
}

updateClock();