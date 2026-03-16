// find elements to use

const IntroDialog = document.getElementById("Warning")
const Acknowledged = document.getElementById("Acknowledged")
const PlayButton = document.getElementById("ClickButton")

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
  document.body.style.backgroundColor = "black";
}

function EndNote() {
  synth.triggerRelease()
  document.body.style.backgroundColor = "yellow";
}

PlayButton.addEventListener("mousedown", StartNote)
PlayButton.addEventListener("mouseup", EndNote)
