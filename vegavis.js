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

async function fetchData() {
  const [data, datalong]= await Promise.all ([d3.csv("./dataset/videogames_wide.csv"),
d3.csv("./dataset/videogames_long.csv")]);
  return {data, datalong};
  }

// async function fetchData() {
//   const datalong = await d3.csv("./dataset/videogames_long.csv");
//   return datalong;
// }

fetchData().then(async ({ data, datalong }) => {

// PART 1
  const vlSpec1 = vl
.markCircle()
.data(data)
.encode(
  vl.x().fieldN("Platform").sort("-x"),
  vl.y().fieldN("Genre"),
  vl.size().fieldQ("Global_Sales").aggregate("total").title("Amount of Sales")
)
    .width("container")
    .height(400)
    .toSpec();

    // PART 1.1 - render, css and html
      const vlSpec1a = vl
.markCircle()
.data(data)
    .transform(
    vl.filter("datum.Publisher == 'Nintendo'")
  )
.encode(
  vl.x().fieldN("Platform").sort("-x"),
  vl.y().fieldN("Genre"),
  vl.size().fieldQ("Global_Sales").aggregate("total").title("Amount of Sales")
)
    .width("container")
    .height(400)
    .toSpec();
    
    // PART 1.2 - render, css and html
    const vlSpec1b = vl
        .markCircle()
        .data(data)
            .transform(
            vl.filter("datum.Genre == 'Action'")
        )
        .encode(
        vl.x().fieldN("Platform").sort("-x"),
        vl.y().fieldN("Genre"),
        vl.size().fieldQ("Global_Sales").aggregate("count")
        )
            .width("container")
            .height(400)
            .toSpec();

// PART 2
  const vlSpec2 = vl
.markPoint()
.data(datalong)
  
.encode(
  vl.x().fieldO("year"),
  vl.shape().fieldN("genre"),
  vl.color().fieldN("platform"),
  vl.y().fieldQ("sales_amount").aggregate("total"),
)
    .width("container")
    .height(400)
    .toSpec();
    // PART 2.1 - render, css and html
      const vlSpec2a = vl
        .markPoint()
        .data(datalong)
            .transform(
            vl.filter("datum.year < '2000'")
        )
        .encode(
        vl.x().fieldO("year"),
        vl.shape().fieldN("genre"),
        vl.color().fieldN("platform"),
        vl.y().fieldQ("sales_amount").aggregate("total"),
        )
    .width("container")
    .height(400)
    .toSpec();

    // PART 2.2 - render, css and html
    const vlSpec2b = vl
        .markPoint()
        .mark("point", { clip: true })
    .data(datalong)
        .transform(
vl.filter("toNumber(datum.sales_amount) >= 5 && toNumber(datum.sales_amount) <= 10")

    )
    .encode(
    vl.x().fieldO("year"),
    vl.shape().fieldN("genre"),
    vl.color().fieldN("platform"),
    vl.y().fieldQ("sales_amount").aggregate("sum").scale({domain: [5, 10]}),
    )
    .width("container")
    .height(400)
    .toSpec();
// PART 3 - render, css and html
  const vlSpec3 = vl
    .markCircle()
.data(datalong)
.encode(
  vl.color().fieldN("sales_region"),
  vl.x().fieldN("platform"),
  vl.y().fieldQ("sales_amount").aggregate("total"),
  vl.tooltip().fieldN("name")
)
    .width("container")
    .height(400)
    .toSpec();
    // PART 3.1 - render, css and html
      const vlSpec3a = vl
    .markCircle()
.data(datalong)
    .transform(
    vl.filter("datum.platform == 'PC'"),
      vl.filter("datum.sales_region == 'na_sales'")
  )
.encode(
  vl.color().fieldN("sales_region"),
  vl.y().fieldN("platform"),
  vl.x().fieldQ("sales_amount").aggregate("average"),
  vl.tooltip().fieldN("name")
)
    .width("container")
    .height(400)
    .toSpec();

    // PART 3.2 - render, css and html
      const vlSpec3b = vl
   .markCircle()
.data(datalong)
    .transform(
    vl.filter("datum.sales_region == 'eu_sales'")
  )
.encode(

  vl.x().fieldN("platform"),
  vl.y().fieldQ("sales_amount").aggregate("average"),
  vl.tooltip().fieldN("name")
)
    .width("container")
    .height(400)
    .toSpec();

// PART 4 - render, css and html
  const vlSpec4 = vl
    .markPoint()
    .data(datalong)
    .transform(
        vl.filter("datum.publisher == 'Nintendo'")
    )
    .encode(
    vl.x().fieldO("year"),
    vl.color().fieldN("platform"),
    vl.y().fieldQ("sales_amount").aggregate("total"),
    )
    .width("container")
    .height(400)
    .toSpec();
    // PART 4.1 - render, css and html
      const vlSpec4a = vl
        .markPoint()
    .data(datalong)
    .transform(
        vl.filter("datum.platform == 'NES'")
    )
    .encode(
    vl.x().fieldO("year"),
    vl.color().fieldN("genre"),
    vl.y().fieldQ("sales_amount").aggregate("total"),
    )
    .width("container")
    .height(400)
    .toSpec();

    // PART 4.2 - render, css and html
      const vlSpec4b = vl
    .markPoint()
    .data(datalong)
    .transform(
        vl.filter("datum.publisher == 'Nintendo'"),
    )
    .encode(
    vl.x().fieldO("year"),
    vl.color().fieldN("platform"),
    vl.y().fieldQ("sales_amount").aggregate("average"),
    )
    .width("container")
    .height(400)
    .toSpec();

  render("#view1", vlSpec1);
  render("#view1a", vlSpec1a);
  render("#view1b", vlSpec1b);
  render("#view2", vlSpec2);
  render("#view2a", vlSpec2a);
  render("#view2b", vlSpec2b);
  render("#view3", vlSpec3);
  render("#view3a", vlSpec3a);
  render("#view3b", vlSpec3b);
  render("#view4", vlSpec4);
  render("#view4a", vlSpec4a);
  render("#view4b", vlSpec4b);
  
});

async function render(viewID, spec) {
  const result = await vegaEmbed(viewID, spec);
  result.view.run();
}