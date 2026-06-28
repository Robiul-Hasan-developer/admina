// ================================ Investment Overview - sparklines ================================
function makeLineChart(selector, data, color) {
  var el = document.querySelector(selector);
  if (!el) return null;
  var chart = new ApexCharts(el, {
    series: [{ data: data }],
    chart: {
      type: "line",
      height: 60,
      width: 120,
      sparkline: { enabled: true },
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    stroke: { curve: "straight", width: 2.5, colors: [color] },
    fill: { opacity: 1 },
    markers: { size: 0 },
    colors: [color],
    dataLabels: { enabled: false },
    tooltip: { enabled: true },
    grid: { show: false },
  });
  chart.render();
  return chart;
}

// Total Investment — indigo uptrend (uses primaryColor)
var totalInvestmentChart = makeLineChart(
  "#totalInvestmentChart",
  [18, 22, 19, 24, 21, 27, 25, 30, 28, 34],
  primaryColor,
);

// Total Profit/Loss — green uptrend
makeLineChart(
  "#profitLossChart",
  [15, 18, 16, 20, 19, 24, 22, 27, 25, 30],
  "#17a05b",
);

// Average ROI — red downtrend
makeLineChart(
  "#avgRoiChart",
  [30, 26, 28, 22, 25, 20, 24, 18, 21, 16],
  "#ef4444",
);

// New clients — olive/amber uptrend
makeLineChart(
  "#newClientsChart",
  [16, 14, 18, 15, 20, 17, 22, 19, 25, 28],
  "#a16207",
);


// ================================ Investment Portfolio - Line Chart ================================
var portfolioChart;
(function () {
  var el = document.querySelector("#portfolioChart");
  if (!el) return;
  portfolioChart = new ApexCharts(el, {
    series: [
      {
        name: "Portfolio",
        data: [100, 102, 99, 101, 98, 103, 100, 102, 99, 105, 108, 112, 104, 98, 96, 95, 97, 99, 98, 100, 99],
      },
    ],
    chart: {
      type: "area",
      height: 320,
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: [primaryColor],
    stroke: { curve: "straight", width: 2 },
    fill: {
      type: "gradient",
      gradient: { shadeIntensity: 1, opacityFrom: 0.25, opacityTo: 0.02, stops: [0, 100] },
    },
    dataLabels: { enabled: false },
    markers: {
      size: 4,
      colors: [primaryColor],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: { size: 6 },
    },
    xaxis: {
      categories: ["Sun", "", "", "Mon", "", "", "Tue", "", "", "Wed", "", "", "Thu", "", "", "Fri", "", "", "Sat", "", ""],
      labels: { style: { fontSize: "12px", colors: "#9ca3af" } },
      axisBorder: { show: false },
      axisTicks: { show: false },
      tooltip: { enabled: false },
    },
    yaxis: {
      min: 85,
      max: 135,
      tickAmount: 5,
      labels: { style: { fontSize: "12px", colors: "#9ca3af" } },
    },
    grid: {
      borderColor: "#eef1f6",
      strokeDashArray: 0,
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: true } },
    },
    legend: { show: false },
    tooltip: { shared: true, intersect: false, x: { show: false } },
  });
  portfolioChart.render();
})();


// ================================================================================================
//  Update all charts primary color — ONE unified function
// ================================================================================================
function updateChartColors(newColor) {
  if (totalInvestmentChart) {
    totalInvestmentChart.updateOptions({
      colors: [newColor],
      stroke: { colors: [newColor] },
    });
  }

  if (portfolioChart) {
    portfolioChart.updateOptions({
      colors: [newColor],
      markers: { colors: [newColor] },
    });
  }
}


// ================================ Latest Investment - DataTable ================================
$(document).ready(function () {
  if (typeof $.fn === "undefined" || !$.fn.DataTable) return;
  var el = document.querySelector("#latestInvestmentTable");
  if (!el) return;
  $(el).DataTable({
    ordering: true,
    info: false,
    searching: false,
    paging: false,
    dom: "t",
    order: [],
    columnDefs: [{ orderable: false, targets: 7 }],
  });

  var denseSwitch = document.getElementById("latestInvestmentDenseSwitch");
  if (denseSwitch) {
    denseSwitch.addEventListener("change", function () {
      el.classList.toggle("table-dense", denseSwitch.checked);
    });
  }
});
