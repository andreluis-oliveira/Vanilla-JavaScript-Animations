const el = document.querySelector('#circle')

let ol = 0
let sc = 1
let circleInterval
let isPlayng = false

function circleAnimation (time) {
  ol++
  sc++

  el.style.left = `${ol}px`

  el.style.width = `${sc}px`
  el.style.height = `${sc}px`

  circleInterval = requestAnimationFrame(circleAnimation)
}

function mouseClicked () {
  if (isPlayng === true) {
    isPlayng = false

    el.classList.add('bg-gray-400')
    el.classList.remove('bg-red-700')

    cancelAnimationFrame(circleInterval)
  } else {
    isPlayng = true

    el.classList.add('bg-red-700')
    el.classList.remove('bg-gray-400')

    circleInterval = requestAnimationFrame(circleAnimation)
  }
}

document.querySelector('#circle').addEventListener('click', mouseClicked)
