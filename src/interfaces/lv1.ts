interface Point {
  x: number,
  y: number
}

const drawPoint = (point: Point) => `${point.x}.${point.y}`

const draw = drawPoint({
  x: 10,
  y: 20
})

console.log(draw)
