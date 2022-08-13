function displayTime() {
  let dateTime = new Date();
  let hrs = dateTime.getHours();
  let min = dateTime.getMinutes();
  let sec = dateTime.getSeconds();

  min = checkTime(min);
  sec = checkTime(sec);
  function checkTime(i) {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }

  // if (hrs < 10) {
  //   hrs = '0' + hrs;
  // }
  // if (min < 10) {
  //   min = '0' + min;
  // }
  // if (sec < 10) {
  //   sec = '0' + sec;
  // }

  document.getElementById('hours').innerText = hrs;
  document.getElementById('minutes').innerText = min;
  document.getElementById('seconds').innerText = sec;
}
setInterval(displayTime, 1000);
