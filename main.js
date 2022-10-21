const secondHand = document.querySelector("[data-scnd]")
const minuteHand = document.querySelector("[data-min]")
const hourHand = document.querySelector("[data-hr]")

function setClock() {
   const currentDate = new Date()
   const seconds = currentDate.getSeconds() / 60
   const minutes = (currentDate.getMinutes() + seconds) / 60
   const hours = (currentDate.getHours() + minutes) / 12

   console.log(currentDate)
   console.log(seconds)
   setRotation(secondHand, seconds)

   console.log(minutes)
   setRotation(minuteHand, minutes)

   console.log(hours)
   setRotation(hourHand, hours)
}

function setRotation(hand, angle) {
   hand.style.setProperty('--rotation', angle * 360)
}

setInterval(setClock, 1000);