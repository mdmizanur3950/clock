// UI Variables
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const hand = document.querySelector('.hand');

const digSecond = document.querySelector('.second');
const digMinute = document.querySelector('.minute');
const digHour = document.querySelector('.hour');


function setTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  digSecond.textContent = seconds;
  digMinute.textContent = minutes;
  digHour.textContent = hours;

  if (seconds === 0) {
    hand.style.tarsition = 'all 0s';
  }

  const secondToDegree = ((seconds / 60) * 360) + 90;
  console.log(seconds);
  const minuteToDegree = ((minutes / 60) * 360) + 90;
  const hourToDegree = ((hours / 12) * 360) + 90;

  secondHand.style.transform = `rotate(${secondToDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteToDegree}deg)`;
  hourHand.style.transform = `rotate(${hourToDegree}deg)`;


  //console.log(seconds);



}

setInterval(setTime, 1000);