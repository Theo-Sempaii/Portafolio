'use strict';

const preBase = document.getElementById('preloader-base');

preBase.style.transitionDuration = '2s'
preBase.style.backgroundColor = 'rgba(255, 255, 255, 0)'

movePreLoaderBars()

setTimeout(() => changeTitle(), 2000);

function movePreLoaderBars() {
  const bar = document.getElementById(`preloader-left`)
  bar.style.transitionDuration = `${window.innerWidth / 200}s`
  bar.style.transitionTimingFunction = 'ease-in-out'
  bar.style.marginRight = '100%'
  preBase.style.transform = 'rotate(120deg)'
}

function changeTitle() {
  document.title = "TheoSempai's portafolio"
}