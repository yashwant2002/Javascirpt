const eventDateInput = document.querySelector(".eventDateInput")
const startButton = document.querySelector(".startButton")
const timeContainer = document.querySelector(".timeContainer")

let countTimeInterval;

function startEventTime(){
    const eventTime = new Date(eventDateInput.value)
    if (isNaN(eventTime.getTime())) {
        timeContainer.textContent = "Invalid date. Please enter a valid date and time.";
        return;
    }

    clearInterval(countTimeInterval);

    countTimeInterval = setInterval(()=>{
        const now = new Date()
        const timeDiff = eventTime - now
        if(timeDiff <= 0){
            clearInterval(countdownInterval);
            timeContainer.textContent = "🎉 The event has started!";
            return;
        }
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        timeContainer.textContent = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`
    },1000)
}

startButton.addEventListener("click",startEventTime)