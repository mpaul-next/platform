// todo stretch goals

// x & y should go to edge of screen, not just 500x500
// support 3+ random colors
// randomize the width & height

window.addEventListener("keydown", event => {
  let colorIndex = Math.random()
  let color = "red"
  if (colorIndex < 0.3) {
    color = "blue"
  }
  if (colorIndex > 0.6) {
    color = "green"
  }
  ctx.fillStyle = color

  let x = Math.random() * canvas.width
  let y = Math.random() * canvas.height
  let width = Math.random() * canvas.width
  let height = Math.random() * canvas.height
  new Shape(x, y, width, height).draw()
})










