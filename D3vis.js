import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

let svg;
let circle;
const width = 800;
const height = 600;
const duration = 800;
const clickFrameCount = 5;
const maxShapes = 20;
let shapeCount = 0;

async function prepareVis() {
  svg = d3.select("#container")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .on("click", addShape);  // 👈 click listener on canvas
}

function getPolygonPoints(cx, cy, sides, radius) {
  const points = [];
  for (let i = 0; i < sides; i++) {
    const angle = (2 * Math.PI * i / sides) - Math.PI / 2;
    points.push([
      cx + radius * Math.cos(angle),
      cy + radius * Math.sin(angle)
    ]);
  }
  return points.map(p => p.join(",")).join(" ");
}

function addShape(event) {
  if (shapeCount >= maxShapes) return;

  const [x, y] = d3.pointer(event, svg.node());
  shapeCount++;  // 👈 increment first so click 1 and 2 are circles

  if (shapeCount <= 2) {
    // First two clicks add circles
    svg.append("circle")
      .attr("cx", x)
      .attr("cy", y)
      .attr("r", 0)
      .attr("fill", "steelblue")
      .transition()
      .duration(duration)
      .attr("r", 20);
  } else {
    // n-th click adds an n-sided polygon
    const points = getPolygonPoints(x, y, shapeCount, 20);
    svg.append("polygon")
      .attr("points", points)
      .attr("fill", "steelblue")
      .attr("transform", `scale(0)`)
      .attr("transform-origin", `${x}px ${y}px`)
      .transition()
      .duration(duration)
      .attr("transform", `scale(1)`);
  }
}

async function drawVis() {
  circle = svg
    .append("circle")
    .attr("r", 15)
    .attr("fill", "white")
    .attr("cx", 55)
    .attr("cy", 25)
    .on("click", (event) => {
      event.stopPropagation();
      playAnimation();
    });
}

async function playAnimation() {
  let index = 0;
  const interval = setInterval(() => {
    let randomX = Math.random() * width;
    let randomY = Math.random() * height;
    let randomR = Math.random() * 25 + 5;

    circle
      .transition()
      .duration(duration)
      .attr("cx", randomX)
      .attr("cy", randomY)
      .attr("r", randomR);

    index++;
    if (index >= clickFrameCount) {
      clearInterval(interval);
    }
  }, duration);
}

async function runApp() {
  await prepareVis();
  await drawVis();
  document.querySelector("#play").addEventListener("click", () => {
    playAnimation();
  });
}

runApp();