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

export function determineImage(player) {}
