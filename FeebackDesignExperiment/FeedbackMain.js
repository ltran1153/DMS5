// find elements to use

const IntroDialog = document.getElementById("Warning")
const Acknowledged = document.getElementById("Acknowledged")
const PlayButton = document.getElementById("ClickButton")
const Number = document.getElementById("number")

IntroDialog.showModal()

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

let count = 0

PlayButton.addEventListener("click", () => {
  count++
  Number.textContent = count

  if (count < 25) {
    document.body.style.backgroundColor = "white"
  } else if (count < 50) {
    document.body.style.backgroundColor = "blue"
  } else if (count < 75) {
    document.body.style.backgroundColor = "red"
  } else if (count < 100) {
    document.body.style.backgroundColor = "yellow"
  } else {
    document.body.style.backgroundColor = "black"
    PlayButton.removeEventListener("mousedown", StartNote)
    PlayButton.removeEventListener("mouseup", EndNote)
    PlayButton.removeEventListener("click", PlayNote)
    PlayButton.addEventListener("mouseover", () => {
      PlayButton.style.cursor = "not-allowed"
    })
    PlayButton.addEventListener("click", () => {
      PlayButton.style.cursor = "not-allowed"
    })
  }
})
