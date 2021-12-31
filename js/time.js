const hour = new Date().getHours()

const preloaderLeft = document.getElementById('preloader-left')
const preloaderRight = document.getElementById('preloader-right')
const preloaderImg = document.getElementById('plimg')
const timeIcon = document.getElementById('time-icon')

if (hour >= 19 || hour <= 6) changeTime(false)
else changeTime(true)

/**
 * 
 * @param {Boolean} day 
 */
function changeTime(day) {

  if (!day) {
    [...document.getElementsByClassName('day-mode')].forEach(element => {
      element.classList.replace('day-mode', 'night-mode')
    });

    preloaderLeft.style.background = 'linear-gradient(0deg, rgb(22, 59, 50), rgb(61, 1, 88))'
    preloaderRight.style.background = 'linear-gradient(0deg, rgb(22, 59, 50), rgb(61, 1, 88))'
    preloaderImg.style.background = 'rgb(29, 29, 61)'
    timeIcon.src = 'img/moon.png'
    timeIcon.className = 'nm';

  } else {
    timeIcon.src = 'img/sun.png';
    timeIcon.className = 'dm';
    [...document.getElementsByClassName('night-mode')].forEach(element => {
      element.classList.replace('night-mode', 'day-mode')
    });

  }


}

timeIcon.addEventListener('click', () => {

  const nightMode = timeIcon.className == 'nm' ? true : false;
  const transitionContainer = document.createElement('div')
  transitionContainer.className = nightMode ? 'transitionContainer bgIN' : 'transitionContainer bgID'
  transitionContainer.style.opacity = '0'
  document.body.insertAdjacentElement('afterbegin', transitionContainer)

  function opacityManagerIn() {
    setTimeout(() => {

      if (transitionContainer.style.opacity < 1) {
        transitionContainer.style.opacity = String(Number(transitionContainer.style.opacity) + 0.01)
        opacityManagerIn()
      } else {
        transitionContainer.className = nightMode ? 'transitionContainer bgTIN' : 'transitionContainer bgTID'

        setTimeout(() => { opacityManagerOut(); changeTime(nightMode) }, 1000)
      }
    }, 1);
  }

  function opacityManagerOut() {
    setTimeout(() => {
      if (transitionContainer.style.opacity > 0) {
        transitionContainer.style.opacity = String(Number(transitionContainer.style.opacity) - 0.01)
        opacityManagerOut()
      } else {
        setTimeout(() => transitionContainer.remove(), 1000)
      }
    }, 10)
  }

  opacityManagerIn()
})









