import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

let svg;
const MAX_CIRCLES = 10;
const MIN_R = 14;
const MAX_R = 40;
const duration = 800;
const clickFrameCount = 5;

const palette = d3.schemeTableau10;
const color = d3.scaleOrdinal(palette);

const width = 960;
const height = 540;

let circles = [];
let idCounter = 0;

function clamp(val,min,max){
  return Math.max(min,Math.min(max,val));
}

async function prepareVis(){

  svg = d3.select("#mini-stage")
    .on("click", addCircle);

}

function addCircle(event){

  const [x,y] = d3.pointer(event, svg.node());

  const datum = {
    id: ++idCounter,
    x: clamp(x,0,width),
    y: clamp(y,0,height),
    r: Math.random()*(MAX_R-MIN_R)+MIN_R,
    fill: color(idCounter % palette.length)
  };

  circles.push(datum);

  if(circles.length > MAX_CIRCLES){
    circles.shift();
  }

  render();

  playAnimation(); // animate after adding

}

function render(){

  const sel = svg.selectAll("circle")
    .data(circles, d=>d.id);

  sel.exit()
    .transition()
    .duration(200)
    .attr("opacity",0)
    .remove();

  const enter = sel.enter()
    .append("circle")
    .attr("cx", d=>d.x)
    .attr("cy", d=>d.y)
    .attr("r",0)
    .attr("fill", d=>d.fill)
    .attr("opacity",0);

  enter.merge(sel)
    .transition()
    .duration(280)
    .attr("cx", d=>d.x)
    .attr("cy", d=>d.y)
    .attr("r", d=>d.r)
    .attr("opacity",1);

}

function playAnimation(){

  let index = 0;

  const interval = setInterval(()=>{

    circles.forEach(d => {
      d.x = Math.random()*width;
      d.y = Math.random()*height;
      d.r = Math.random()*(MAX_R-MIN_R)+MIN_R;
    });

    svg.selectAll("circle")
      .data(circles, d=>d.id)
      .transition()
      .duration(duration)
      .attr("cx", d=>d.x)
      .attr("cy", d=>d.y)
      .attr("r", d=>d.r);

    index++;

    if(index >= clickFrameCount){
      clearInterval(interval);
    }

  },duration);

}

async function drawVis(){

  d3.select(window)
    .on("keydown",(event)=>{
      if(event.key.toLowerCase()==="c"){
        circles=[];
        render();
      }
    });

}

async function runApp(){

  await prepareVis();
  await drawVis();

}

runApp();