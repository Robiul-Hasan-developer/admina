// ================================ Visitors By Device - Semi Donut Gauge ================================
var visitorsDeviceGauge;
(function () {
  var el = document.querySelector("#visitorsDeviceGauge");
  if (!el) return;
  visitorsDeviceGauge = new ApexCharts(el, {
    series: [30, 12, 17, 15, 14, 12],
    labels: ["Desktop", "Mobile", "Laptop", "Tablet", "Smart TV", "Smart Watch"],
    chart: { type: "donut", height: 300 },
    colors: [primaryColor, "#d946ef", "#06b6d4", "#22c55e", "#facc15", "#f87171"],
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
  });
  visitorsDeviceGauge.render();
})();


// ================================ Sales Revenue - Dual Area Chart ================================
var salesRevenueChart;
(function () {
  var el = document.querySelector("#salesRevenueChart");
  if (!el) return;
  salesRevenueChart = new ApexCharts(el, {
    series: [
      { name: "Delivered", data: [10, 95, 40, 130, 55, 200, 60, 235, 70, 210, 90, 225] },
      { name: "Cancelled", data: [5, 60, 30, 80, 40, 110, 45, 120, 50, 110, 55, 118] },
    ],
    chart: {
      type: "area",
      height: 380,
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: ["#06b6d4", "#f87171"],
    stroke: { curve: "smooth", width: 2, dashArray: [6, 0] },
    fill: {
      type: "gradient",
      gradient: { shadeIntensity: 1, opacityFrom: 0.3, opacityTo: 0.02, stops: [0, 100] },
    },
    dataLabels: { enabled: false },
    markers: { size: 0, hover: { size: 4 } },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      labels: { style: { fontSize: "12px", colors: "#9ca3af" } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      min: 0,
      max: 300,
      tickAmount: 5,
      labels: { style: { fontSize: "12px", colors: "#9ca3af" } },
    },
    grid: {
      borderColor: "#f1f5f9",
      strokeDashArray: 4,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    legend: { show: false },
    tooltip: { shared: true, intersect: false },
  });
  salesRevenueChart.render();
})();


// ================================================================================================
//  Update all charts primary color — ONE unified function
// ================================================================================================
function updateChartColors(newColor) {
  if (visitorsDeviceGauge) {
    visitorsDeviceGauge.updateOptions({
      colors: [newColor, "#d946ef", "#06b6d4", "#22c55e", "#facc15", "#f87171"],
    });
  }
}
