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


