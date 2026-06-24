// ================================ Shared sparkline line config ================================
function makeLineChart(selector, data, color) {
  return new ApexCharts(document.querySelector(selector), {
    series: [{ data: data }],
    chart: {
      type: "line",
      height: 60,
      width: 120,
      sparkline: { enabled: true },
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    stroke: {
      curve: "straight",
      width: 2.5,
      colors: [color],
    },
    fill: { opacity: 1 },
    markers: { size: 0 },
    colors: [color],
    dataLabels: { enabled: false },
    tooltip: { enabled: true },
    grid: { show: false },
  });
}

// Leads Generated — blue uptrend line
var totalVisitorsChart = makeLineChart(
  "#totalVisitorsChart",
  [18, 22, 19, 24, 21, 27, 25, 30, 28, 34],
  "#6366f1",
);
totalVisitorsChart.render();

// Qualified Leads — green uptrend line
var pageViewsChart = makeLineChart(
  "#pageViewsChart",
  [15, 18, 16, 20, 19, 24, 22, 27, 25, 30],
  "#17a05b",
);
pageViewsChart.render();

// Deals Closed — yellow/amber uptrend (jagged) line
var bounceRateChart = makeLineChart(
  "#bounceRateChart",
  [18, 24, 20, 26, 22, 28, 25, 31, 28, 34],
  "#d97706",
);
bounceRateChart.render();

// Revenue Generated — red/coral downtrend line
var avgSessionChart = makeLineChart(
  "#avgSessionChart",
  [26, 32, 28, 34, 27, 25, 28, 22, 24, 18],
  "#ef4444",
);
avgSessionChart.render();


// ================================ Sales Overview - Combo (bars + area + dashed line) ================================
(function () {
  var el = document.querySelector("#salesOverviewChart");
  if (!el) return;

  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  new ApexCharts(el, {
    series: [
      { name: "Sales", type: "column", data: [37, 30, 33, 40, 43, 55, 48, 60, 58, 70, 65, 76] },
      { name: "Orders", type: "column", data: [20, 15, 18, 16, 20, 22, 18, 28, 25, 30, 28, 33] },
      { name: "Trend", type: "area", data: [22, 24, 30, 33, 40, 55, 68, 58, 62, 70, 68, 72] },
      { name: "Target", type: "line", data: [18, 19, 20, 22, 24, 26, 25, 28, 30, 31, 32, 33] },
    ],
    chart: {
      height: 320,
      type: "line",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: ["#22c55e", "#facc15", "#06b6d4", "#6366f1"],
    stroke: {
      curve: "smooth",
      width: [0, 0, 2, 2],
      dashArray: [0, 0, 0, 5],
    },
    plotOptions: {
      bar: {
        columnWidth: "55%",
        borderRadius: 3,
        borderRadiusApplication: "end",
      },
    },
    fill: {
      type: ["solid", "solid", "gradient", "solid"],
      opacity: [1, 1, 0.25, 1],
      gradient: { shadeIntensity: 1, opacityFrom: 0.3, opacityTo: 0.02, stops: [0, 100] },
    },
    markers: { size: 0, hover: { size: 4 } },
    dataLabels: { enabled: false },
    xaxis: {
      categories: months,
      labels: { style: { fontSize: "11px", colors: "#9ca3af" } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      min: 0,
      max: 80,
      tickAmount: 4,
      labels: { style: { fontSize: "11px", colors: "#9ca3af" } },
    },
    grid: {
      borderColor: "#f1f5f9",
      strokeDashArray: 0,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    legend: { show: false },
    tooltip: { shared: true, intersect: false },
  }).render();
})();


// ================================ Lead Source - Semi Donut Gauge ================================
(function () {
  var el = document.querySelector("#leadSourceChart");
  if (!el) return;

  new ApexCharts(el, {
    // Segments left -> right: Newsletter, Instagram, LinkedIn, WhatsApp, Telegram, Website
    series: [30, 9, 17, 17, 15, 12],
    labels: ["Newsletter", "Instagram", "LinkedIn", "WhatsApp", "Telegram", "Website"],
    chart: {
      type: "donut",
      height: 300,
    },
    colors: ["#6366f1", "#d946ef", "#06b6d4", "#22c55e", "#facc15", "#ef4444"],
    stroke: { width: 3, colors: ["#fff"] },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 20,
        donut: { size: "68%" },
      },
    },
    dataLabels: { enabled: false },
    legend: { show: false },
    tooltip: { y: { formatter: function (val) { return val + "%"; } } },
    grid: { padding: { bottom: -90 } },
  }).render();
})();


