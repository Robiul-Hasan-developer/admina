// ================================ Stat card sparklines ================================
function makeStatSpark(selector, data, color) {
  var el = document.querySelector(selector);
  if (!el) return null;
  var chart = new ApexCharts(el, {
    series: [{ name: "Value", data: data }],
    chart: {
      type: "line",
      height: 48,
      width: 90,
      sparkline: { enabled: true },
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: [color],
    stroke: { curve: "smooth", width: 2.5 },
    markers: { size: 0 },
    dataLabels: { enabled: false },
    tooltip: { enabled: false },
    grid: { show: false },
  });
  chart.render();
  return chart;
}

var revenueSpark = makeStatSpark("#revenueSpark", [20, 24, 22, 28, 25, 32, 30, 36, 34, 41], primaryColor);
makeStatSpark("#artworksSpark", [15, 20, 18, 24, 22, 28, 26, 32, 30, 37], "#22c55e");
makeStatSpark("#auctionSpark", [40, 30, 36, 26, 32, 24, 28, 20, 26, 16], "#facc15");
makeStatSpark("#creatorsSpark", [18, 26, 20, 30, 24, 34, 28, 36, 30, 42], "#f87171");


// ================================ Marketplace - Grouped Bar Chart ================================
var marketplaceChart;
(function () {
  var el = document.querySelector("#marketplaceChart");
  if (!el) return;
  marketplaceChart = new ApexCharts(el, {
    series: [
      { name: "Artworks", data: [20000, 15000, 14000, 22000, 47000, 13000, 20000, 10000, 22000, 45000, 15000, 20000] },
      { name: "Auction", data: [12000, 14000, 12000, 15000, 34000, 13000, 14000, 9000, 12000, 37000, 11000, 14000] },
    ],
    chart: {
      type: "bar",
      height: 300,
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: ["#7c5cfc", "#facc15"],
    plotOptions: {
      bar: { columnWidth: "45%", borderRadius: 4, borderRadiusApplication: "end" },
    },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 3, colors: ["transparent"] },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      labels: { style: { fontSize: "12px", colors: "#9ca3af" } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      min: 0,
      max: 50000,
      tickAmount: 5,
      labels: { style: { fontSize: "12px", colors: "#9ca3af" } },
    },
    grid: {
      borderColor: "#ffffff00",
      strokeDashArray: 4,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    legend: { show: false },
    tooltip: { shared: true, intersect: false },
  });
  marketplaceChart.render();
})();


// ================================================================================================
//  Update all charts primary color — ONE unified function
// ================================================================================================
function updateChartColors(newColor) {
  if (revenueSpark) {
    revenueSpark.updateOptions({ colors: [newColor] });
  }
  if (marketplaceChart) {
    marketplaceChart.updateOptions({ colors: [newColor, "#facc15"] });
  }
}
