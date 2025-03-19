function updateClock() {

  const nowdate = new Date();
 
  const hours = nowdate.getHours().toString().padEnd(2, "0");


  const minutes = nowdate.getMinutes().toString().padStart(2, "0");


  const seconds = nowdate.getSeconds().toString().padStart(2, "0");
 

  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  document.getElementById("date").textContent = nowdate.toDateString();


  
}

updateClock();

setInterval(updateClock, 1000);


