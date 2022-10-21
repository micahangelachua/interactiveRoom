function setClock() {
   const currentDate = new Date()

   console.log(currentDate);
}

setInterval(setClock, 1000);