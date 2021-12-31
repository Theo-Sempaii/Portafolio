'use strict';

const preloaderBase = document.getElementById('preloader-base');
const preloaderImage = document.getElementById('preloader-image')
const container = document.getElementById('preloader-container');
window.onload = main

translatePreLoaderImage()

function main() {
  document.title = "TheoSempaii's portfolio"
  preloaderBase.style.transitionDuration = '2s'
  preloaderBase.style.backgroundColor = 'rgba(255, 255, 255, 0)'
  clearPreloader(false)
}


function translatePreLoaderImage() {
  const interval = setInterval(() => {
    const deg = !preloaderImage.style.background.includes('deg') ? 180 : preloaderImage.style.background.split('deg')[0].split('(')[1]
    preloaderImage.style.background = `linear-gradient(${deg < 360 ? Number(deg) + 5 : 0}deg, rgb(68, 0, 255), rgb(0, 174, 255))`
  }, 10);
  setTimeout(() => {
    clearInterval(interval)
  }, 10000)
}

function clearPreloader() {
  preloaderImage.style.transitionDuration = `1s`
  preloaderImage.style.transitionTimingFunction = 'ease-in-out';

  preloaderImage.style.width = '40%'
  setTimeout(() => {
    preloaderImage.style.width = '0%'
    preloaderImage.style.padding = '0%'
  }, 800);
  movePreLoaderBars()
  var val = 0;
  if (window.innerWidth < 1280) val = 2500
  else if (window.innerWidth < 1920) val = 3000
  else if (window.innerWidth < 2560) val = 3500
  else val = 10000
  setTimeout(() => {
    preloaderBase.style.transitionDuration = '0s'
    container.style.transitionDuration = '0s'
    container.style.height = '0%'
    container.style.width = '0%'
    preloaderBase.style.height = '0%'
    preloaderBase.style.width = '0%'
  }, val)


}



function movePreLoaderBars() {

  const bar = document.getElementById(`preloader-left`)
  bar.style.transitionDuration = `${Math.round(window.innerWidth / 200)}s`
  bar.style.transitionTimingFunction = 'ease-in-out'
  bar.style.marginRight = '100%'
  preloaderBase.style.transform = 'rotate(120deg)'


}