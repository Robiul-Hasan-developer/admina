// ================================ Total Revenue - Bar chart with one highlighted bar ================================
var barChartOptions = {
  series: [
    {
      data: [20, 30, 25, 35, 90, 25],
    },
  ],
  chart: {
    type: "bar",
    height: 80,
    width: 130,
    sparkline: { enabled: true },
  },
  plotOptions: {
    bar: {
      columnWidth: "65%",
      borderRadius: 3,
      distributed: true,
    },
  },
  colors: [
    trackColor,
    trackColor,
    trackColor,
    trackColor,
    primaryColor,
    trackColor,
  ],
  dataLabels: { enabled: false },
  tooltip: { enabled: false },
};
var barChart = new ApexCharts(
  document.querySelector("#barChart"),
  barChartOptions,
);
barChart.render();

// ================================ Total Orders - Area sparkline ================================
var lineChartOptions = {
  series: [
    {
      data: [30, 45, 32, 50, 40, 60, 38, 55, 42, 58, 35, 48, 52, 40, 46],
    },
  ],
  chart: {
    type: "area",
    height: 80,
    sparkline: { enabled: true },
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0,
    },
  },
  colors: [primaryColor],
  tooltip: { enabled: false },
};
var lineChart = new ApexCharts(
  document.querySelector("#lineChart"),
  lineChartOptions,
);
lineChart.render();

// ================================ Conversion Rate - Radial bar ================================
var radialChartOptions = {
  series: [35.5],
  chart: {
    type: "radialBar",
    height: 90,
    width: 90,
    sparkline: { enabled: true },
  },
  plotOptions: {
    radialBar: {
      startAngle: 0,
      endAngle: 360,
      hollow: {
        size: "70%",
      },
      track: {
        background: trackColor,
        strokeWidth: "100%",
        margin: 0,
      },
      dataLabels: {
        name: { show: false },
        value: {
          fontSize: "12px",
          fontWeight: 500,
          color: primaryColor,
          offsetY: 0,
          show: true,
          formatter: function (val) {
            return val + "%";
          },
        },
      },
    },
  },
  fill: {
    colors: [primaryColor],
  },
  stroke: {
    lineCap: "round",
  },
  labels: ["Conversion Rate"],
};
var radialChart = new ApexCharts(
  document.querySelector("#radialChart"),
  radialChartOptions,
);
radialChart.render();

// ================================ Total Customers - Column sparkline with alternating opacity ================================
var columnChartOptions = {
  series: [
    {
      data: [60, 40, 75, 35, 90, 50, 70],
    },
  ],
  chart: {
    type: "bar",
    height: 80,
    sparkline: { enabled: true },
  },
  plotOptions: {
    bar: {
      columnWidth: "40%",
      borderRadius: 3,
    },
  },
  colors: [primaryColor],
  fill: {
    opacity: [1, 0.3, 1, 0.3, 1, 0.3, 1],
  },
  dataLabels: { enabled: false },
  tooltip: { enabled: false },
};
var columnChart = new ApexCharts(
  document.querySelector("#columnChart"),
  columnChartOptions,
);
columnChart.render();
// ========================== Home One chart js end ======================================

// ================================ Delivery Status - Stacked Bar (Horizontal Progress) ================================
var deliveryBarChart = new ApexCharts(
  document.querySelector("#deliveryBarChart"),
  {
    series: [
      { name: "On-Time Delivery", data: [25] },
      { name: "Delivered", data: [45] },
      { name: "In Transit", data: [15] },
      { name: "Delayed", data: [15] },
    ],
    chart: {
      type: "bar",
      height: 70,
      stacked: true,
      stackType: "100%",
      sparkline: { enabled: true },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "16px",
        borderRadius: 4,
        borderRadiusWhenStacked: "all",
        borderRadiusApplication: "around",
      },
    },
    colors: ["#00B8D9", "#22C55E", "#FDC70F", "#F6776E"],
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return Math.round(val) + "%";
      },
      style: {
        fontSize: "18px",
        fontWeight: 500,
        colors: ["#434956"],
      },
      offsetY: -28, // ✅ moves labels above the bar
      distributed: false,
    },
    xaxis: { labels: { show: false } },
    yaxis: { labels: { show: false } },
    grid: { show: false },
    legend: { show: false },
    tooltip: { enabled: false },
  },
);
deliveryBarChart.render();

// ================================ Returning Clients - Area Chart ================================
var returningClientsChartOptions = {
  series: [
    {
      name: "Retention",
      data: [60, 75, 55, 80, 65, 85, 70, 90, 75, 85],
    },
  ],
  chart: {
    type: "area",
    height: 180,
    sparkline: { enabled: true },
    toolbar: { show: false },
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.4,
      gradientToColors: ["#ffffff"],
      opacityFrom: 0.6,
      opacityTo: 0.05,
      stops: [0, 100],
    },
  },
  colors: [primaryColor],
  dataLabels: { enabled: false },
  tooltip: { enabled: false },
};
var returningClientsChart = new ApexCharts(
  document.querySelector("#returningClientsChart"),
  returningClientsChartOptions,
);
returningClientsChart.render();

// ================================ Sales Overview - Dual Line Chart ================================
var salesOverviewChart = new ApexCharts(
  document.querySelector("#salesOverviewChart"),
  {
    series: [
      {
        name: "This Year",
        data: [75, 60, 55, 70, 65, 60, 55, 65, 60, 55, 60, 55],
      },
      {
        name: "Last Year",
        data: [38, 55, 25, 60, 40, 55, 35, 50, 42, 55, 38, 78],
      },
    ],
    chart: { type: "line", height: 160, toolbar: { show: false } },
    stroke: { curve: "smooth", width: [2, 2], dashArray: [0, 5] },
    colors: [primaryColor, "#eab308"],
    xaxis: {
      categories: ["02 Jan", "04 Jan", "06 Jan", "08 Jan", "10 Jan", "12 Jan"],
      tickAmount: 5,
      labels: { style: { fontSize: "10px", colors: "#9ca3af" } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: { style: { fontSize: "10px", colors: "#9ca3af" } },
      min: 0,
      max: 100,
      tickAmount: 4,
    },
    grid: { borderColor: "#f3f4f6", strokeDashArray: 3 },
    legend: { show: false },
    markers: {
      size: 4,
      strokeWidth: 2,
      strokeColors: ["#fff", "#fff"],
      fillColors: [primaryColor, "#eab308"],
    },
    annotations: {
      xaxis: [
        {
          x: "06 Jan",
          borderColor: "#00b8f2",
          strokeDashArray: 4,
          borderWidth: 1.5,
        },
      ],
    },
    tooltip: { shared: true },
  },
);
salesOverviewChart.render();

// ================================ Order Summary - Donut Chart ================================
var orderSummaryChart = new ApexCharts(
  document.querySelector("#orderSummaryChart"),
  {
    series: [45, 30, 25],
    chart: { type: "donut", height: 260 },
    colors: [primaryColor, "#00b8f2", "#f87171"],
    labels: ["Completed", "New Order", "Pending"],
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total Orders",
              fontSize: "12px",
              color: "#9ca3af",
              formatter: () => "4.5K",
            },
            value: { show: false },
          },
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => Math.round(val) + "%",
      style: { fontSize: "12px", fontWeight: 500, colors: ["#fff"] },
      dropShadow: { enabled: false },
    },
    legend: { show: false },
    stroke: { width: 2 },
  },
);
orderSummaryChart.render();

// ================================ Revenue by Category - Half Donut ================================
var revenueByCategoryChart = new ApexCharts(
  document.querySelector("#revenueByCategoryChart"),
  {
    series: [30, 20, 15, 12, 13, 10],
    chart: { type: "donut", height: 300 },
    colors: [
      primaryColor,
      "#f87171",
      "#00b8f2",
      "#a855f7",
      "#22c55e",
      "#eab308",
    ],
    labels: [
      "Fashion",
      "Beauty",
      "Medical",
      "Sports",
      "Electronics",
      "Furniture",
    ],
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 60,
        donut: {
          size: "65%",
          labels: {
            show: false,
            total: {
              show: true,
              label: "Total Products",
              fontSize: "12px",
              color: "#9ca3af",
              formatter: () => "25.59K",
            },
            value: { show: false },
          },
        },
      },
    },
    dataLabels: { enabled: false },
    legend: { show: false },
    stroke: { width: 2 },
    grid: { padding: { bottom: -80 } },
  },
);
revenueByCategoryChart.render();

// Update all charts primary color ✅ ONE merged function — replaces BOTH previous updateChartColors definitions
function updateChartColors(newColor) {
  barChart.updateOptions({
    colors: [
      trackColor,
      trackColor,
      trackColor,
      trackColor,
      newColor,
      trackColor,
    ],
  });

  lineChart.updateOptions({
    colors: [newColor],
  });

  radialChart.updateOptions({
    fill: { colors: [newColor] },
    plotOptions: {
      radialBar: {
        dataLabels: {
          value: { color: newColor },
        },
      },
    },
  });

  columnChart.updateOptions({
    colors: [newColor],
  });

  returningClientsChart.updateOptions({
    colors: [newColor],
  });

  salesOverviewChart.updateOptions({
    colors: [newColor, "#eab308"],
    markers: { fillColors: [newColor, "#eab308"] },
  });
  orderSummaryChart.updateOptions({ colors: [newColor, "#00b8f2", "#f87171"] });
  revenueByCategoryChart.updateOptions({
    colors: [newColor, "#f87171", "#00b8f2", "#a855f7", "#22c55e", "#eab308"],
  });
}

// =========================== Color Schema js Start ================================
const colorPickerButtons = document.querySelectorAll(".color-picker-btn");
const colors = {
  blue: "#2563eb",
  red: "#dc2626",
  green: "#16a34a",
  yellow: "#ff9f29",
  cyan: "#00b8f2",
  violet: "#7c3aed",
};

function applyColor(color) {
  const newColor = colors[color];
  document.documentElement.style.setProperty("--primary-600", newColor);
  localStorage.setItem("templateColor", color);

  // Update charts instantly with the new color
  updateChartColors(newColor);
}

colorPickerButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const color = btn.getAttribute("data-color");
    if (!color) return;
    applyColor(color);
    colorPickerButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Load saved color on refresh
const savedColor = localStorage.getItem("templateColor");
if (savedColor && colors[savedColor]) {
  applyColor(savedColor);
  document
    .querySelector(`.color-picker-btn[data-color="${savedColor}"]`)
    .classList.add("active");
} else {
  document
    .querySelector(`.color-picker-btn[data-color="blue"]`)
    .classList.add("active");
}
// =========================== Color Schema js End ================================
