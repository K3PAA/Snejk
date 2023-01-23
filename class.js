const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 500
canvas.height = 500

export class Block {
  constructor({ position, direction = '', color }) {
    this.position = position
    this.direction = direction
    this.color = color
  }

  draw() {
    c.fillStyle = this.color
    c.fillRect(this.position.x, this.position.y, 50, 50)
  }
}
