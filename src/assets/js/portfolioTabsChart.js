// ================================================================================
//  Portfolio Tabs (Overview) — Portfolio Performance + Asset Allocation
//  Loaded only on index-3.html. `primaryColor` / `getCssVar` come from the
//  inline script in _template-bottom.html.
// ================================================================================
(function () {
  var perfEl = document.querySelector("#portfolioPerformanceChart");
  var allocEl = document.querySelector("#assetAllocationChart");
  if (!perfEl || !allocEl) return; // page doesn't have these cards

  var brand = (typeof primaryColor !== "undefined" && primaryColor) ? primaryColor : "#4F46E5";
  var greenColor = "#22c55e";
  var solColor = "#facc15";
  var othersColor = "#06b6d4";

  // Theme-aware center text colors (read once at load)
  var textPrimary = getCssVar("--text-primary-light") || "#1F2937";
  var textSecondary = getCssVar("--text-secondary-light") || "#6B7280";

  // -------------------------------------------------------------- Portfolio Performance
  var portfolioPerformanceChart = new ApexCharts(perfEl, {
    series: [
      { name: "Portfolio", data: [335, 310, 290, 365, 380, 555, 520] },
      { name: "Benchmark", data: [113, 125, 97, 128, 85, 225, 205] },
    ],
    chart: {
      type: "area",
      height: 360,
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: [brand, greenColor],
    stroke: { curve: "straight", width: 2 },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.45,
        opacityTo: 0.02,
        stops: [0, 100],
      },
    },
    markers: {
      size: 4,
      strokeWidth: 2,
      strokeColors: "#fff",
      colors: [brand, greenColor],
      hover: { size: 6 },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      labels: { style: { fontSize: "12px", colors: "#9ca3af" } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      min: 0,
      max: 600,
      tickAmount: 6,
      labels: { style: { fontSize: "12px", colors: "#9ca3af" } },
    },
    grid: {
      borderColor: "#f1f5f9",
      strokeDashArray: 0,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "13px",
      fontWeight: 500,
      markers: { width: 8, height: 8, radius: 12 },
      itemMargin: { horizontal: 12, vertical: 8 },
      labels: { colors: "#6B7280" },
    },
    tooltip: { shared: true, intersect: false },
  });
  portfolioPerformanceChart.render();

  // -------------------------------------------------------------- Asset Allocation (donut)
  var assetAllocationChart = new ApexCharts(allocEl, {
    series: [48, 12, 25, 15],
    labels: ["BTC", "ETH", "SOL", "Others"],
    chart: { type: "donut", height: 280 },
    colors: [brand, greenColor, solColor, othersColor],
    stroke: { width: 0 },
    dataLabels: { enabled: false },
    legend: { show: false },
    // plotOptions: {
    //   pie: {
    //     donut: {
    //       size: "72%",
    //       labels: {
    //         show: true,
    //         value: {
    //           show: true,
    //           fontSize: "28px",
    //           fontWeight: 700,
    //           color: textPrimary,
    //           offsetY: -6,
    //           formatter: function () { return "4576"; },
    //         },
    //         total: {
    //           show: true,
    //           showAlways: true,
    //           label: "Total Crypto",
    //           fontSize: "13px",
    //           fontWeight: 500,
    //           color: textSecondary,
    //           formatter: function () { return "4576"; },
    //         },
    //       },
    //     },
    //   },
    // },
    tooltip: { y: { formatter: function (val) { return val + "%"; } } },
  });
  assetAllocationChart.render();

  // -------------------------------------------------------------- Refresh button
  var refreshBtn = document.getElementById("portfolioRefreshBtn");
  if (refreshBtn) {
    refreshBtn.addEventListener("click", function () {
      var icon = refreshBtn.querySelector("iconify-icon, i");
      if (icon) {
        icon.style.transition = "transform .6s ease";
        icon.style.transform = "rotate(360deg)";
        setTimeout(function () {
          icon.style.transition = "none";
          icon.style.transform = "rotate(0deg)";
        }, 650);
      }
      portfolioPerformanceChart.updateSeries([
        { name: "Portfolio", data: [335, 310, 290, 365, 380, 555, 520] },
        { name: "Benchmark", data: [113, 125, 97, 128, 85, 225, 205] },
      ], true);
      assetAllocationChart.updateSeries([48, 12, 25, 15], true);
    });
  }

  // -------------------------------------------------------------- Color-picker integration
  // Extend (don't replace) the customizer's updateChartColors so these charts
  // also recolor without breaking homeTwoChart.js's own charts.
  var prevUpdate = (typeof updateChartColors === "function") ? updateChartColors : null;
  updateChartColors = function (newColor) {
    if (prevUpdate) prevUpdate(newColor);
    portfolioPerformanceChart.updateOptions({
      colors: [newColor, greenColor],
      markers: { colors: [newColor, greenColor] },
    });
    assetAllocationChart.updateOptions({
      colors: [newColor, greenColor, solColor, othersColor],
    });
  };
})();


// ================================================================================
//  Active Trading Bots — mini bar sparklines (index-3 only)
// ================================================================================
(function () {
  if (!document.querySelector("#btcSignalBotChart")) return; // page guard

  function makeBotBars(selector, data, colors) {
    var el = document.querySelector(selector);
    if (!el) return;
    new ApexCharts(el, {
      series: [{ data: data }],
      chart: {
        type: "bar",
        height: 56,
        width: 130,
        sparkline: { enabled: true },
        toolbar: { show: false },
        animations: { enabled: false },
      },
      plotOptions: {
        bar: {
          columnWidth: "60%",
          borderRadius: 2,
          borderRadiusApplication: "end",
          distributed: true,
        },
      },
      colors: colors,
      dataLabels: { enabled: false },
      legend: { show: false },
      tooltip: { enabled: false },
      states: {
        hover: { filter: { type: "none" } },
        active: { filter: { type: "none" } },
      },
      grid: { show: false },
    }).render();
  }

  var cyan = "#22d3ee";
  var indigo = "#6366f1";
  var amber = "#facc15";
  var green = "#22c55e";
  var coral = "#f87171";

  // Card 1 — BTC Signal Bot: teal bars with an indigo spike cluster
  makeBotBars(
    "#btcSignalBotChart",
    [9, 11, 8, 13, 10, 15, 12, 20, 34, 46, 40, 26, 14, 10, 8, 7],
    [cyan, cyan, cyan, cyan, cyan, cyan, cyan, indigo, indigo, indigo, indigo, indigo, cyan, cyan, cyan, cyan]
  );

  // Card 2 — ETH DCA Bot: alternating amber / green
  makeBotBars(
    "#ethDcaBotChart",
    [18, 12, 22, 15, 25, 14, 20, 17, 23, 13, 19, 16, 24, 12, 21, 15],
    [amber, green, amber, green, amber, green, amber, green, amber, green, amber, green, amber, green, amber, green]
  );

  // Card 3 — Arbitrage Bot: rising green bars ending in tall indigo bars
  makeBotBars(
    "#arbitrageBotChart",
    [7, 9, 8, 11, 10, 13, 12, 15, 14, 17, 19, 30, 42],
    [green, green, green, green, green, green, green, green, green, green, green, indigo, indigo]
  );

  // Card 4 — Pump Screener: coral bars
  makeBotBars(
    "#pumpScreenerChart",
    [16, 22, 14, 24, 18, 26, 15, 23, 17, 25, 19, 21, 16, 24, 20],
    [coral, coral, coral, coral, coral, coral, coral, coral, coral, coral, coral, coral, coral, coral, coral]
  );
})();
