let drawing = document.querySelector("#drawing");
let visualization = document.querySelector("#visualization");
console.log(visualization);
console.log(drawing);
const svgNS = "http://www.w3.org/2000/svg";

function addRect (svg, x, h, color) {
    const rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("x", x+50);
    rect.setAttribute("y", 350-h);
    rect.setAttribute("width", 100);
    rect.setAttribute("height", h);
    rect.setAttribute("fill", color);
    svg.appendChild(rect);
}

function addTitle (svg,x,y,type) {
    const text = document.createElementNS(svgNS, "text");
    text.setAttribute("x", x+5+50);
    text.setAttribute("y", y);
    text.textContent = type;
    text.setAttribute("font-size", "20")
    text.setAttribute("fill", "white");
    svg.appendChild(text);
 }

 function addHorizontalTitle (svg,x,y,type) {
    const text = document.createElementNS(svgNS, "text");
    text.setAttribute("x", x+5+50);
    text.setAttribute("y", y);
    text.textContent = type;
    text.setAttribute("font-size", "20")
    text.setAttribute("fill", "white");
    text.setAttribute("transform", "rotate(-90 100 100)")
    svg.appendChild(text);
 }

function addText (svg,x,y,type) {
    const text = document.createElementNS(svgNS, "text");
    text.setAttribute("x", x+5+50);
    text.setAttribute("y", y);
    text.textContent = type;
    text.setAttribute("fill", "white");
    svg.appendChild(text);
 }

addRect(visualization, 0, 150, "red");
addRect(visualization, 200, 250, "green");
addRect(visualization, 400, 200, "blue");
addRect(visualization, 600, 300, "yellow");

addText(visualization, 25, 375,"Red");
addText(visualization, 220, 375, "Green");
addText(visualization, 425, 375, "Blue");
addText(visualization, 620, 375, "Yellow");
addText(visualization, 40, 180, "3");
addText(visualization, 240, 80, "5");
addText(visualization, 440, 130, "4");
addText(visualization, 640, 30, "6");

addTitle(visualization, 275, 450, "Colour Name")
addHorizontalTitle(visualization, -150,20 ,"Amount of Letters")