import CountDown from './countdown.js';

const date = new CountDown('1 January 2021 00:00:00 GMT');

setInterval(() => {
  document.querySelector('.days').innerHTML = date.total.days;
  document.querySelector('.hours').innerHTML = date.total.hours;
  document.querySelector('.minutes').innerHTML = date.total.minutes;
  document.querySelector('.seconds').innerHTML = date.total.seconds;
}, 1000);
