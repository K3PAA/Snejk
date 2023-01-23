const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 500
canvas.height = 500

export class Block {
  constructor({ position, direction }) {
    this.position = position
    this.direction = direction
  }

  draw() {
    c.fillStyle = 'green'
    c.fillRect(this.position.x, this.position.y, 50, 50)
  }
}
