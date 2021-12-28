const hour = new Date().getHours()

const swipper = document.getElementsByClassName('swiper')[0]
const header = document.getElementById('header')
const footer = document.getElementById('footer')
const preloaderLeft = document.getElementById('preloader-left')
const preloaderRight = document.getElementById('preloader-right')
const preloaderImg = document.getElementById('plimg')

if (hour > 19 || hour < 6) {
  swipper.classList.replace('day-mode', 'night-mode')
  header.classList.replace('day-mode', 'night-mode')
  footer.classList.replace('day-mode', 'night-mode')
  preloaderLeft.style.background = 'linear-gradient(0deg, rgb(22, 59, 50), rgb(61, 1, 88))'
  preloaderRight.style.background = 'linear-gradient(0deg, rgb(22, 59, 50), rgb(61, 1, 88))'
  preloaderImg.style.background = 'rgb(29, 29, 61)'
}

console.log(hour)