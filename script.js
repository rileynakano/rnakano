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