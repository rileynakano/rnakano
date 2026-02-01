let svg = document.querySelector("svg");
console.log(svg);


const svgNS = "http://www.w3.org/2000/svg";
const rect = document.createElementNS(svgNS, "rect");
rect.setAttribute("x", 400)
rect.setAttribute("y", 400)
rect.setAttribute("width", "100");
rect.setAttribute("height", "100");
rect.setAttribute("fill", "red")
svg.appendChild(rect)