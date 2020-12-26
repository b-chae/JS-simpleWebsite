const clockContainer = document.querySelector(".js-clock")
const clockTitle = clockContainer.querySelector("h1")

function getTime(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    clockTitle.innerText = `${ hour < 10 ? "0" + hour : hour}:${ minute < 10 ? "0" + minute : minute}:${ second < 10 ? "0" + second : second}`
}

function init(){
    getTime()
    setInterval(getTime, 1000);
}

init()