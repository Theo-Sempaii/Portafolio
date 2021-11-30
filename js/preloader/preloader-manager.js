'use strict';

const preloaderBase = document.getElementById('preloader-base');
const preloaderImage = document.getElementById('preloader-image')
window.onload = main

translatePreLoaderImage()



function main() {
  document.title = "TheoSempaii's portfolio"
  preloaderBase.style.transitionDuration = '2s'
  preloaderBase.style.backgroundColor = 'rgba(255, 255, 255, 0)'
  clearPreloader()
}


function createPreLoaderBaseParticles() {

}

function translatePreLoaderImage() {
  setInterval(() => {
    const deg = !preloaderImage.style.background.includes('deg') ? 180 : preloaderImage.style.background.split('deg')[0].split('(')[1]
    preloaderImage.style.background = `linear-gradient(${deg < 360 ? Number(deg) + 5 : 0}deg, red, rgb(255, 136, 0))`
  }, 10);
}

function clearPreloader() {
  preloaderImage.style.transitionDuration = '0.8s'
  preloaderImage.style.transitionTimingFunction = 'ease-in-out';
  preloaderImage.style.width = '40%'
  setTimeout(() => {
    preloaderImage.style.width = '0%'
    preloaderImage.style.padding = '0%'
  }, 800);
  movePreLoaderBars()
}



function movePreLoaderBars() {
  const bar = document.getElementById(`preloader-left`)
  bar.style.transitionDuration = `${Math.round(window.innerWidth / 200)}s`
  bar.style.transitionTimingFunction = 'ease-in-out'
  bar.style.marginRight = '100%'
  preloaderBase.style.transform = 'rotate(120deg)'
}