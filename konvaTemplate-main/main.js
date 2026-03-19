//find our elements
const stageContainer = document.getElementById("stage-container")
const CircleButton = document.getElementById("CircleButton")
//find width
let stageContainerWidith = stageContainer.offsetWidth
console.log(stageContainerWidth)
//find height
let stageContainerHeight = stageContainer.offsetHeight
console.log(stageContainerHeight)
// create the konva stage
const stage = new Konva.Stage({
  container: "konva-stage",
  width: stageContainerWidith,
  height: stageContainerHeight,
})

//new circle color

let CircleColor = "red"

//create our layer
const firstLayer = new Konva.Layer()

const circle = new Konva.Circle({
  x: stage.width() / 2,
  y: stage.height() / 2,
  radius: 50,
  fill: "red",
})
//add circle to first layer
firstLayer.add(circle)
//add layer to stage
stage.add(firstLayer)

//add interaction to button

function DrawNewCircle() {
  const circle = new Konva.Circle({
    x: stage.width() * Math.random(),
    y: stage.height() * Math.random(),
    radius: 50,
    fill: CircleColor
  })
}

CircleButton.addEventListener("click", DrawNewCircle)
