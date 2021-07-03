// const base = document.getElementById('pre-loader-container')
const base = document.getElementsByClassName('pre-loader-bg')[0]

for (let i = 0; i < 30; i++) {
  const item = document.createElement('div')
  item.style.width = '30px'
  item.style.height = '30px'
  item.style.position = 'fixed'
  item.style.borderRadius = '100%'
  item.style.backgroundColor = 'rgba(0, 0, 0, 0.116)'
  item.className = 'pre-loader-point'

  if (getRandomBoolean()) {
    item.style.top = getRandomPixel() + 'px'
  } else {
    item.style.bottom = getRandomPixel() + 'px'
  }

  if (getRandomBoolean()) {
    item.style.right = getRandomPixel() + 'px'
  } else {
    item.style.left = getRandomPixel() + 'px'
  }

  item.animate([
    { transform: 'scale(1,1)' },
    { transform: 'scale(0,0)' },
    { transform: 'scale(1,1)' },

  ], {
    duration: 2000,
    iterations: Infinity,
    delay: getRandomPixel()
  })

  base.insertAdjacentElement('afterbegin', item)

}

function getRandomBoolean() {
  const random = Math.floor((Math.random() * 2) + 1)
  return random > 1 ? true : false
}

function getRandomPixel(pos) {
  const truePos = pos ? window.innerWidth : window.innerHeight

  return Math.floor(Math.random() * truePos)
}