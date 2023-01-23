import { drawGrid } from './utils.js'
import { Block } from './class.js'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 500
canvas.height = 500

let food,
  player = [],
  direction = 'right'

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
        color: 'blue',
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
    color: 'orange',
  })
}

food = makeFood()

let ix = 0
let start = undefined

start = setInterval(() => {
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)

  for (let i = player.length - 1; i > 0; i--) {
    player[i].direction = player[i - 1].direction
  }

  player[0].direction = direction

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

  for (let i = 0; i < player.length; i++) {
    for (let y = i + 1; y < player.length; y++) {
      if (
        player[i].position.x === player[y].position.x &&
        player[i].position.y === player[y].position.y
      ) {
        resetGame()
      }
    }
  }

  // food.draw()

  drawGrid()
  ix++
}, 200)

function resetGame() {
  console.log('resetGame')
}

// DO NAPRAWIENIA -- JAK KLIKNIESZ SZYBKO I INTERVAL SIE NIE ZROBI TO MOZNA NADAL SIE COFAC

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'w':
      if (direction !== 'down') direction = 'top'
      break

    case 's':
      if (direction !== 'top') direction = 'down'
      break

    case 'd':
      if (direction !== 'left') direction = 'right'
      break

    case 'a':
      if (direction !== 'right') direction = 'left'
      break
  }
})
