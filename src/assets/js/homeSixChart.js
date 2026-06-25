// ================================ Total Balance - Income/Expense wave sparklines ================================
function makeWaveChart(selector, data, color) {
  var el = document.querySelector(selector);
  if (!el) return;
  new ApexCharts(el, {
    series: [{ name: "Value", data: data }],
    chart: {
      type: "area",
      height: 90,
      width: "100%",
      sparkline: { enabled: true },
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: [color],
    stroke: { curve: "smooth", width: 2, colors: [color] },
    fill: {
      type: "gradient",
      gradient: { shadeIntensity: 1, opacityFrom: 0.45, opacityTo: 0.03, stops: [0, 100] },
    },
    dataLabels: { enabled: false },
    markers: { size: 0 },
    tooltip: { enabled: false },
    grid: { show: false },
  }).render();
}

makeWaveChart("#totalIncomeChart", [20, 28, 22, 35, 26, 40, 30, 45, 32, 48], "#6366f1");
makeWaveChart("#totalExpensesChart", [30, 24, 34, 26, 40, 28, 36, 24, 38, 30], "#f87171");
makeWaveChart("#averageIncomeWaveChart", [18, 30, 22, 38, 26, 44, 30, 40, 28, 46], "#22c55e");
makeWaveChart("#dailySalesChart", [22, 32, 24, 40, 28, 46, 30, 42, 26, 48], "#06b6d4");
