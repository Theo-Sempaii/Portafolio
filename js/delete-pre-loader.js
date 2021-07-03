window.onload = function () {
  setTimeout(() => { deletePreLoader() }, 3000);
}

function deletePreLoader() {
  const preLoader = document.getElementById('pre-loader-container')
  preLoader.animate([
    { transform: 'scale(1,1)' },
    { transform: 'scale(0,0)' }

  ], {
    duration: 1000,

  }).onfinish = () => {
    preLoader.remove()
    deleteBG()
    deletePoints()
  }
}

function deleteBG() {
  const preLoaderBG = document.getElementsByClassName('pre-loader-bg')[0]
  preLoaderBG.animate([
    { background: 'rgb(32, 32, 32)' },
    { background: 'rgb(32, 32, 32, 0)' }

  ], {
    duration: 1000,
  }).onfinish = () => {
    preLoaderBG.remove()

  }
}

function deletePoints() {
  const preLoaderPoints = Array(...document.getElementsByClassName('pre-loader-point'))
  preLoaderPoints.forEach(point => {
    point.getAnimations()[0].updatePlaybackRate(0)
    point.animate([
      {},
      { backgroundColor: 'rgb(32, 32, 32, 0)', transform: 'scale(0,0)' }

    ], {
      duration: 500,
    }).onfinish = () => { point.style.backgroundColor = 'rgba(255, 255, 255, 0)' }

  });

}