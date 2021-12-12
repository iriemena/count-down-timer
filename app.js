const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

const newYear = "1 Jan 2023";
const countdown = () => {
  const currentDate = new Date();
  const newYearDate = new Date(newYear);
  const totalSeconds = (newYearDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  day.innerHTML = days;
  hour.innerHTML = zero(hours);
  minute.innerHTML = zero(minutes);
  second.innerHTML = zero(seconds);
};

const zero = (time) => {
  return time <= 9 ? `0${time}` : time;
};
countdown();
setInterval(countdown, 1000);
