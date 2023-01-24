const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 500
canvas.height = 500

export class Block {
  constructor({ position, direction = '', color, imageSrc = '' }) {
    this.position = position
    this.direction = direction
    this.imageSrc = imageSrc
    this.image = new Image()
    this.image.src = this.imageSrc
    this.color = color
  }

  draw() {
    c.drawImage(
      this.image,
      0,
      0,
      this.image.width,
      this.image.height,
      this.position.x,
      this.position.y,
      50,
      50
    )
  }
}
