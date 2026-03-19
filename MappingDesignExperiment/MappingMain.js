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

/*For this experiment I decided to see the potential usages of different input controls
by using different input types to control different elements of color (Hue, Brightness, Contrast).
 
I used the radio input to control hue following the class tutorial. This input limits and lays out
 precisely the different options users have to choose from, in this case, colors: red, yellow, and blue.
 The advantage of this input is in its clarity; Users have limited options laid out right in front of them,
  meaning they don't have to play around with the input to get the desired results
 
 To control the brightness, I decided on the number input. The number input allows users to control values
 in set increments and provides two methods of control; clicking provides precise incremental jumps in values
 while holding down the button quickly moves through the range of values. The advantage of this input is
 that it allows the users a wider range of control for users than the radio input, while providing 
 the same precision, it also allows users to quickly go to the limit of the input by holding down the button 
 
For contrast controls, I used the range input, which is a slider. The slider input controls its values based on where
the thumb is on its track. The slider is easily the most efficient method of selecting from a range of values, however,
it sacrifices the precise controls that the other two inputs provide. When providing the users with a wide value range,
it is often best to use the slider, as it is the most efficient and precise input when it comes to controlling wide ranges;
taking less area than radio input, more precise than holding down number input button*/
