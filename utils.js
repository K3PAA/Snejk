import { Block } from './class.js'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 500
canvas.height = 500

const size = canvas.width / 10

export function drawGrid() {
  c.strokeStyle = 'white'
  for (let i = 0; i <= size; i++) {
    c.beginPath()
    c.moveTo(i * 50, 0)
    c.lineTo(i * 50, canvas.height)
    c.stroke()

    c.beginPath()
    c.moveTo(0, i * 50)
    c.lineTo(canvas.width, i * 50)
    c.stroke()
  }
}

export function determineImage(player) {
  switch (player[0].direction) {
    case 'right':
      player[0].image.src = 'Graphics/head_right.png'
      break

    case 'left':
      player[0].image.src = 'Graphics/head_left.png'
      break
    case 'top':
      player[0].image.src = 'Graphics/head_up.png'
      break

    case 'down':
      player[0].image.src = 'Graphics/head_down.png'
      break
  }

  for (let i = 1; i < player.length; i++) {
    if (
      (player[i].direction === 'right' &&
        player[i - 1].direction === 'right') ||
      (player[i].direction === 'left' && player[i - 1].direction === 'left')
    ) {
      player[i].image.src = 'Graphics/body_horizontal.png'
    } else if (
      (player[i].direction === 'top' && player[i - 1].direction === 'top') ||
      (player[i].direction === 'down' && player[i - 1].direction === 'down')
    ) {
      player[i].image.src = 'Graphics/body_vertical.png'
    } else if (
      (player[i].direction === 'top' && player[i - 1].direction === 'right') ||
      (player[i].direction === 'left' && player[i - 1].direction === 'down')
    ) {
      player[i].image.src = 'Graphics/body_bottomright.png'
    } else if (
      (player[i].direction === 'top' && player[i - 1].direction === 'left') ||
      (player[i].direction === 'right' && player[i - 1].direction === 'down')
    ) {
      player[i].image.src = 'Graphics/body_bottomleft.png'
    } else if (
      (player[i].direction === 'down' && player[i - 1].direction === 'left') ||
      (player[i].direction === 'right' && player[i - 1].direction === 'top')
    ) {
      player[i].image.src = 'Graphics/body_topleft.png'
    } else if (
      (player[i].direction === 'down' && player[i - 1].direction === 'right') ||
      (player[i].direction === 'left' && player[i - 1].direction === 'top')
    ) {
      player[i].image.src = 'Graphics/body_topright.png'
    }
  }

  switch (player[player.length - 2].direction) {
    case 'right':
      player[player.length - 1].image.src = 'Graphics/tail_left.png'
      break

    case 'left':
      player[player.length - 1].image.src = 'Graphics/tail_right.png'
      break
    case 'top':
      player[player.length - 1].image.src = 'Graphics/tail_down.png'
      break

    case 'down':
      player[player.length - 1].image.src = 'Graphics/tail_up.png'
      break
  }

  return player
}
