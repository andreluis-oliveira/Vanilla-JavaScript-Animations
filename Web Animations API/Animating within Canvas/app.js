let rotatingSquare = ''

const buttonPlay = document.querySelector('#button-play')
const buttonPause = document.querySelector('#button-pause')
const buttonSpeedUp = document.querySelector('#button-speed-up')
const buttonSpeedDown = document.querySelector('#button-speed-down')

rotatingSquare = document.querySelector('#web-animation').animate([
  { backgroundColor: '#000000', opacity: 1.0, transform: 'rotate(0deg) translate3D(0, 0, 0)', easing: 'ease-out' },
  { backgroundColor: '#440000', opacity: 0.3 },
  { backgroundColor: '#000000', opacity: 1.0, transform: 'rotate(360deg) translate3D(0, 0, 0)', easing: 'ease-in' }
], {
  duration: 500,
  iterations: Infinity,
  easing: 'ease-in-out'
})

buttonPlay.addEventListener('click', () => {
  rotatingSquare.play()
})
buttonPause.addEventListener('click', () => {
  rotatingSquare.pause()
})
buttonSpeedUp.addEventListener('click', () => {
  rotatingSquare.playbackRate += 0.2
})
buttonSpeedDown.addEventListener('click', () => {
  rotatingSquare.playbackRate -= 0.2
})
