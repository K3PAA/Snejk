import { drawGrid } from './utils.js'
import { Block } from './class.js'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 500
canvas.height = 500

const size = canvas.width / 10

c.fillStyle = 'orange'
c.fillRect(0, 0, canvas.width, canvas.height)

let playerSize = 1,
  direction = 'right',
  playerBlocks = []

const animate = () => {
  requestAnimationFrame(animate)
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)

  drawGrid()
}

animate()
