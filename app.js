import { drawGrid, determineImage } from './utils.js'
import { Block } from './class.js'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 500
canvas.height = 500

let food,
  player = [],
  direction = 'right',
  pressed = 1

const size = canvas.width / 10

function createPlayer() {
  for (let i = 0; i < 4; i++) {
    player.push(
      new Block({
        position: {
          x: 300 - i * size,
          y: 100,
        },
        direction: 'right',
      })
    )
  }
}

createPlayer()

function makeFood() {
  return new Block({
    position: {
      x: Math.floor(Math.random() * 10) * size,
      y: Math.floor(Math.random() * 10) * size,
    },
    imageSrc: 'Graphics/apple.png',
  })
}

food = makeFood()

let start = undefined

start = setInterval(() => {
  pressed++

  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)

  for (let i = player.length - 1; i > 0; i--) {
    player[i].direction = player[i - 1].direction
  }

  player[0].direction = direction

  player.forEach((block) => {
    if (
      player[0].position.x === food.position.x &&
      player[0].position.y === food.position.y
    ) {
      player.push(
        new Block({
          position: {
            x: player[player.length - 1].position.x,
            y: player[player.length - 1].position.y,
          },
        })
      )
      food = makeFood()
    } else if (
      block.position.x === food.position.x &&
      block.position.y === food.position.y
    ) {
      food = makeFood()
    }
  })
  food.draw()

  determineImage(player)

  player.forEach((block) => {
    if (block.position.x >= canvas.width) {
      block.position.x = 0
    } else if (block.position.x < 0) {
      block.position.x = canvas.width - size
    } else if (block.position.y < 0) {
      block.position.y = canvas.height - size
    } else if (block.position.y >= canvas.height) {
      block.position.y = 0
    } else {
      switch (block.direction) {
        case 'top':
          block.position.y -= 50
          break
        case 'down':
          block.position.y += 50
          break
        case 'right':
          block.position.x += 50
          break
        case 'left':
          block.position.x -= 50
          break
      }
    }

    block.draw()
  })

  for (let i = 1; i < player.length; i++) {
    let head = player[0]
    if (
      head.position.x === player[i].position.x &&
      head.position.y === player[i].position.y
    ) {
      resetGame()
    }
  }

  drawGrid()
}, 200)

function resetGame() {
  console.log('resetGame')
}

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'w':
      if (direction !== 'down' && pressed) direction = 'top'
      pressed = 0
      break

    case 's':
      if (direction !== 'top' && pressed) direction = 'down'
      pressed = 0
      break

    case 'd':
      if (direction !== 'left' && pressed) direction = 'right'
      pressed = 0
      break

    case 'a':
      if (direction !== 'right' && pressed) direction = 'left'
      pressed = 0
      break
  }
})

const menu = document.querySelector('main')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
  menu.classList.add('off')
})
