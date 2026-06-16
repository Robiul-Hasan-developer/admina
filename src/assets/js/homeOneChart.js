// ========================== Home One chart js start ======================================
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
  colors: [trackColor, trackColor, trackColor, trackColor, primaryColor, trackColor],
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

// Update all charts to use the new primary color
function updateChartColors(newColor) {
  barChart.updateOptions({
    colors: [trackColor, trackColor, trackColor, trackColor, newColor, trackColor],
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
}

// ========================== Home One chart js end ======================================



// ================================ Delivery Status - Stacked Bar (Horizontal Progress) ================================
var deliveryBarChart = new ApexCharts(document.querySelector("#deliveryBarChart"), {
  series: [
    { name: 'On-Time Delivery', data: [25] },
    { name: 'Delivered',        data: [45] },
    { name: 'In Transit',       data: [15] },
    { name: 'Delayed',          data: [15] }
  ],
  chart: {
    type: 'bar',
    height: 50,
    stacked: true,
    stackType: '100%',
    sparkline: { enabled: true }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '40%',
      borderRadius: 0,
      borderRadiusWhenStacked: 'all',
      borderRadiusApplication: 'around'
    }
  },
  colors: ['#00B8D9', '#22C55E', '#FDC70F', '#F6776E'],
  dataLabels: {
    enabled: true,
    formatter: function (val) { return Math.round(val) + '%'; },
    style: {
      fontSize: '16px',
      fontWeight: 500,
      colors: ['#434956']
    }
  },
  xaxis: { labels: { show: false } },
  yaxis: { labels: { show: false } },
  grid:  { show: false },
  legend: { show: false },
  tooltip: { enabled: false }
});
deliveryBarChart.render();

// ================================ Returning Clients - Area Chart ================================
var returningClientsChart = new ApexCharts(document.querySelector("#returningClientsChart"), {
  series: [{
    name: 'Retention',
    data: [60, 75, 55, 80, 65, 85, 70, 90, 75, 85]
  }],
  chart: {
    type: 'area',
    height: 180,
    sparkline: { enabled: true },
    toolbar: { show: false }
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.4,
      gradientToColors: ['#ffffff'],
      opacityFrom: 0.6,
      opacityTo: 0.05,
      stops: [0, 100]
    }
  },
  colors: ['#7c3aed'],
  dataLabels: { enabled: false },
  tooltip:     { enabled: false }
});
returningClientsChart.render();