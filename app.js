const daysElement = document.querySelector('.days'),
      hrsElement = document.querySelector('.hours'),
      minsElement = document.querySelector('.mins'),
      secsElement = document.querySelector('.secs')

const countdown = () => {
  const countTill = new Date("11.01.21").getTime()
  const now = new Date().getTime()

  const timeLeft = countTill - now

  const sec = 1000
  const min = sec * 60
  const hr = min * 60
  const day = hr * 24

  const textDay = Math.floor(timeLeft / day);
  const textHour = Math.floor((timeLeft % day) / hr);
  const textMin = Math.floor((timeLeft % hr) / min);
  const textSec = Math.floor((timeLeft % min) / sec);
  
  daysElement.innerHTML = '<span class="top"></span> ' + textDay
  hrsElement.innerHTML = '<span class="top"></span> ' + textHour
  minsElement.innerHTML = '<span class="top"></span> ' + textMin
  secsElement.innerHTML = '<span class="top"></span> ' + textSec
}

setInterval(countdown, 1000)