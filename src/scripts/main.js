'use strict';

function getTimeRemaining(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  const days = Math.floor(t / (1000 * 60 * 60 * 24));

  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds,
  };
}

function initializeClock(endtime) {
  const daysContainer = document.querySelector('.counter__days');
  const hoursContainer = document.querySelector('.counter__hours');
  const minutesContainer = document.querySelector('.counter__minutes');
  const secondsContainer = document.querySelector('.counter__seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysContainer.innerHTML = t.days;
    hoursContainer.innerHTML = ('0' + t.hours).slice(-2);
    minutesContainer.innerHTML = ('0' + t.minutes).slice(-2);
    secondsContainer.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();

  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 6 * 24 * 60 * 60 * 1000); 

initializeClock(deadline);
