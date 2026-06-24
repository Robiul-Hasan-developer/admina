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

// Total Visitors — purple uptrend line
var totalVisitorsChart = makeLineChart(
  "#totalVisitorsChart",
  [18, 22, 19, 24, 21, 27, 25, 30, 28, 34],
  "#6366f1",
);
totalVisitorsChart.render();

// Page Views — green uptrend line
var pageViewsChart = makeLineChart(
  "#pageViewsChart",
  [15, 18, 16, 20, 19, 24, 22, 27, 25, 30],
  "#17a05b",
);
pageViewsChart.render();

// Bounce Rate — yellow/amber downtrend line
var bounceRateChart = makeLineChart(
  "#bounceRateChart",
  [34, 30, 32, 27, 29, 24, 26, 20, 23, 18],
  "#d97706",
);
bounceRateChart.render();

// Avg. Session — red/coral uptrend line
var avgSessionChart = makeLineChart(
  "#avgSessionChart",
  [16, 14, 18, 15, 20, 17, 22, 19, 25, 28],
  "#ef4444",
);
avgSessionChart.render();


