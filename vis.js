let drawing = document.querySelector("#drawing");
let visualization = document.querySelector("#visualization");
console.log(visualization);
console.log(drawing);
const svgNS = "http://www.w3.org/2000/svg";

let links = document.querySelectorAll(".worklink");

let hover = document.querySelectorAll(".hover");
console.log(hover)

links.forEach((link) => {
    link.addEventListener("click", () => {
        alert("Copied!");
    });
});


hover.forEach((hov) => {
  hov.addEventListener("mouseenter", () => {
    hov.style.color = "orange";
  });

  hov.addEventListener("mouseleave", () => {
    hov.style.color = "whitesmoke";
  });
});

function addRect (svg, x, h, color) {
    const rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", 350-h);
    rect.setAttribute("width", 100);
    rect.setAttribute("height", h);
    rect.setAttribute("fill", color);
    svg.appendChild(rect);
}

function addTitle (svg,x,y,type) {
    const text = document.createElementNS(svgNS, "text");
    text.setAttribute("x", x);
    text.setAttribute("y", y);
    text.textContent = type;
    text.setAttribute("font-size", "20")
    text.setAttribute("fill", "white");
    svg.appendChild(text);
 }

 function addHorizontalTitle (svg,x,y,type) {
    const text = document.createElementNS(svgNS, "text");
    text.setAttribute("x", x+50);
    text.setAttribute("y", y);
    text.textContent = type;
    text.setAttribute("font-size", "20")
    text.setAttribute("fill", "white");
    text.setAttribute("transform", "rotate(-90 100 100)")
    svg.appendChild(text);
 }

function addText (svg,x,y,type) {
    const text = document.createElementNS(svgNS, "text");
    text.setAttribute("x", x+50);
    text.setAttribute("y", y);
    text.textContent = type;
    text.setAttribute("fill", "white");
    svg.appendChild(text);
 }

function addCircle (svg, x, y, r, color) {
     const circle = document.createElementNS(svgNS, "circle");
     circle.setAttribute("cx", x)
     circle.setAttribute("cy", y)
     circle.setAttribute("r", r)
     circle.setAttribute("fill", color)
     svg.appendChild(circle)
}

function addLine (svg, x1, y1, x2, y2, color) {
    const line = document.createElementNS(svgNS, "line");
    line.setAttribute("x1", x1)
    line.setAttribute("y1", y1)
    line.setAttribute("x2", x2)
    line.setAttribute("y2", y2)
    line.setAttribute("stroke", color)
    line.setAttribute("stroke-width", 5)
    svg.appendChild(line)
}

function addRectangle (svg, x,y, w, h, color) {
    const rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", w);
    rect.setAttribute("height", h);
    rect.setAttribute("fill", color);
    svg.appendChild(rect);
}

const triangle = document.createElementNS(svgNS, "polygon");





//Drawing the Visualization
//graph
addRect(visualization, 90, 150, "red");
addRect(visualization, 290, 250, "green");
addRect(visualization, 490, 200, "blue");
addRect(visualization, 690, 300, "yellow");
//labels
addText(visualization, 75, 375,"Red");
addText(visualization, 270, 375, "Green");
addText(visualization, 475, 375, "Blue");
addText(visualization, 670, 375, "Yellow");
//# amounts
addText(visualization, 90, 180, "3");
addText(visualization, 290, 80, "5");
addText(visualization, 490, 130, "4");
addText(visualization, 690, 30, "6");

addTitle(visualization, 325, 450, "Colour Name")
addHorizontalTitle(visualization, -150,20 ,"Amount of Letters")

//Drawing the art
//body
addCircle(drawing,200,150,50,"white")
addCircle(drawing,200,255,75,"white")
addCircle(drawing,200,400,100,"white")
//eyes
addCircle(drawing,180,140,5,"black")
addCircle(drawing,220,140,5,"black")
//mouth
addCircle(drawing,225,163,5,"black")
addCircle(drawing,214,170,5,"black")
addCircle(drawing,200,172,5,"black")
addCircle(drawing,186,170,5,"black")
addCircle(drawing,175,163,5,"black")
//buttons
addCircle(drawing,200,220,8,"black")
addCircle(drawing,200,260,8,"black")
addCircle(drawing,200,300,8,"black")
//arms
//leftarm
addLine(drawing,125,255,60,200,"brown")
addLine(drawing,60,200,65,180,"brown")
addLine(drawing,60,200,40,185,"brown")
addLine(drawing,60,200,45,210,"brown")
//rightarm
addLine(drawing,275,255,350,200,"brown")
addLine(drawing,350,200,370,180,"brown")
addLine(drawing,350,200,380,215,"brown")
//hat
addRectangle(drawing,150,20,100,80,"black")
addRectangle(drawing,150,80,100,20,"red")
addRectangle(drawing,120,100,160,20,"black")
//nose

triangle.setAttribute("points", "195,145 195,155 220,150");

triangle.setAttribute("fill", "orange");

drawing.appendChild(triangle);
drawing.appendChild(triangle);