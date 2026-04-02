// Create the Konva stage
const stage = new Konva.Stage({
  container: "konva-container",
  width: 800,
  height: 500,
});

const layer = new Konva.Layer();
stage.add(layer);

// Background box
const bg = new Konva.Rect({
  x: 20,
  y: 20,
  width: 760,
  height: 460,
  fill: "#fffbe6",
  stroke: "black",
  strokeWidth: 2,
  cornerRadius: 10,
});

layer.add(bg);

// Title
const titleText = new Konva.Text({
  x: 40,
  y: 40,
  text: "Your Mad Libs Story",
  fontSize: 28,
  fontStyle: "bold",
  fill: "black",
});

layer.add(titleText);

// Story text
const storyText = new Konva.Text({
  x: 40,
  y: 100,
  width: 720,
  text: "Fill in the words on the left, then click Generate Story.",
  fontSize: 24,
  lineHeight: 1.4,
  fill: "#333",
});

layer.add(storyText);
layer.draw();

// Button logic
const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", () => {
  const adjective = document.getElementById("adjective").value || "silly";
  const noun = document.getElementById("noun").value || "dog";
  const verb = document.getElementById("verb").value || "run";
  const place = document.getElementById("place").value || "beach";

  const story = `One day, I saw a ${adjective} ${noun} trying to ${verb} in the ${place}. 
It was the strangest thing I had ever seen, and everyone around me started laughing.`;

  storyText.text(story);
  layer.draw();
});