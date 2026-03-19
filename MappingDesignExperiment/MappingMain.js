//find our elements
const stageContainer = document.getElementById("stage-container")
const CircleButton = document.getElementById("CircleButton")
const ChangeRed = document.getElementById("Red")
const ChangeYellow = document.getElementById("Yellow")
const ChangeBlue = document.getElementById("Blue")
const Brightness = document.getElementById("Brightness")
const Contrast = document.getElementById("Contrast")
//find width
let stageContainerWidth = stageContainer.offsetWidth
console.log(stageContainerWidth)
//find height
let stageContainerHeight = stageContainer.offsetHeight
console.log(stageContainerHeight)
// create the konva stage
const stage = new Konva.Stage({
  container: "konva-stage",
  width: stageContainerWidth,
  height: stageContainerHeight,
})

//new circle color

let CircleColor = "red"

//create our layer
const firstLayer = new Konva.Layer()

//add layer to stage
stage.add(firstLayer)

//add interaction to button

function DrawNewCircle() {
  const circle = new Konva.Circle({
    x: stage.width() * Math.random(),
    y: stage.height() * Math.random(),
    radius: 50 * Math.random(),
    fill: CircleColor,
  })
  //cache is required to set filters
  circle.cache()
  //enabling different types of filters
  circle.filters([Konva.Filters.Contrast, Konva.Filters.Brighten])
  // This changes contrast based on "range" value
  circle.contrast(parseFloat(Contrast.value))
  // This changes brightness based on "number" value
  circle.brightness(parseFloat(Brightness.value))
  console.log(circle)
  firstLayer.add(circle)
  firstLayer.draw()
}

CircleButton.addEventListener("click", DrawNewCircle)

function ChangeColor(Choose) {
  let ColorChange = Choose.target.value

  CircleColor = ColorChange
}

ChangeRed.addEventListener("click", ChangeColor)
ChangeYellow.addEventListener("click", ChangeColor)
ChangeBlue.addEventListener("click", ChangeColor)
