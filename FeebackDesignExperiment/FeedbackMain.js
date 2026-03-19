// find elements to use

const IntroDialog = document.getElementById("Warning")
const Acknowledged = document.getElementById("Acknowledged")
const PlayButton = document.getElementById("ClickButton")
const Number = document.getElementById("number")

IntroDialog.showModal()
// This function will close the popup dialog box when clicking the button inside it.
Acknowledged.addEventListener("click", CloseDialog)

function CloseDialog() {
  IntroDialog.close()
  Tone.start()
}

//tone synth init
const synth = new Tone.Synth().toDestination()

// play sound with tone

function PlayNote() {
  synth.triggerAttackRelease("C4", "8n")
}

PlayButton.addEventListener("click", PlayNote)

function StartNote() {
  synth.triggerAttack("C4")
}

function EndNote() {
  synth.triggerRelease("8n")
}

PlayButton.addEventListener("mousedown", StartNote)
PlayButton.addEventListener("mouseup", EndNote)

//This function will change the number count inside my #number div based on button clicks, 
// providing users with a sense of progression when clicking the button
let count = 0
PlayButton.addEventListener("click", () => {
  count++
  Number.textContent = count
 //This function will change the background color of my project based on different
 // threshhold number of clicks the users doe, providing a change of state based on
 // user progression. This gives feedback that the number of clicks will lead to 
 // some reward.

 //The visual feedback the user receives is: the they click, the brighter and more
 // vibrant colors become, until eventually something happens.
  if (count < 25) {
    document.body.style.backgroundColor = "white"
  } else if (count < 50) {
    document.body.style.backgroundColor = "blue"
  } else if (count < 75) {
    document.body.style.backgroundColor = "red"
  } else if (count < 100) {
    document.body.style.backgroundColor = "yellow"
  } else {
    // This function is the climax of the user's progression, shutting all audio
    // and visual elements, leaving nothing but a black screen; sort of like an
    // anticlimax to user's progression so far.

    //By making background black, it also makes the black text unseeable, 
    // leaving nothing but a black screen
    document.body.style.backgroundColor = "black"
    //Removing audio feedback in addition to visual feedback, to show that the 
    // progression is over
    PlayButton.removeEventListener("mousedown", StartNote)
    PlayButton.removeEventListener("mouseup", EndNote)
    PlayButton.removeEventListener("click", PlayNote)
    PlayButton.addEventListener("mouseover", () => {
     //changing cursor to the prohibition sign shows the button is no longer
     //functional.
      PlayButton.style.cursor = "not-allowed"
    })
    PlayButton.addEventListener("click", () => {
      PlayButton.style.cursor = "not-allowed"
    })
  }
})
