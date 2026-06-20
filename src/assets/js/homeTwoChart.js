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

// ================================ Audience Overview - Combo Bar + Line Chart ================================
var audienceOverviewChart = new ApexCharts(
  document.querySelector("#audienceOverviewChart"),
  {
    series: [
      {
        name: "New Visitors",
        type: "column",
        data: [2, 5, 8, 25, 28, 70, 175],
      },
      {
        name: "Previous Visitors",
        type: "column",
        data: [3, 6, 10, 22, 25, 80, 135],
      },
      {
        name: "Unique Visitors",
        type: "line",
        data: [18, 20, 30, 45, 65, 102, 220],
      },
    ],
    chart: {
      height: 320,
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    stroke: {
      curve: "smooth",
      width: [0, 0, 2],
    },
    colors: ["#6366f1", "#22c55e", "#ef4444"],
    plotOptions: {
      bar: {
        columnWidth: "55%",
        borderRadius: 0,
        borderRadiusApplication: "end",
      },
    },
    fill: {
      opacity: [1, 1, 1],
    },
    markers: {
      size: 0,
      hover: { size: 5 },
    },
    xaxis: {
      categories: ["Mo", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      labels: {
        style: { fontSize: "12px", colors: "#9ca3af" },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      min: 0,
      max: 250,
      tickAmount: 5,
      labels: {
        style: { fontSize: "12px", colors: "#9ca3af" },
      },
    },
    grid: {
      borderColor: "#f3f4f6",
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
      markers: {
        width: 8,
        height: 8,
        radius: 12,
      },
      itemMargin: {
        horizontal: 12,
        vertical: 8,
      },
      labels: {
        colors: "#6B7280",
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
  },
);
audienceOverviewChart.render();



// ================================ Total Subscribers - Equal Height, Varying Width Bar Chart ================================
var subscribersChart = new ApexCharts(document.querySelector("#subscribersChart"), {
  series: [{
    data: [
      { x: 'Email Marketing', y: 100, columnWidth: '100%' },
      { x: 'Social Marketing', y: 100, columnWidth: '85%' },
      { x: 'Direct', y: 100, columnWidth: '70%' },
      { x: 'Referral', y: 100, columnWidth: '50%' },
      { x: 'Organic Search', y: 100, columnWidth: '25%' }
    ]
  }],
  chart: {
    type: 'bar',
    height: 160,
    width: '100%',
    toolbar: { show: false },
    sparkline: { enabled: true },
    animations: { enabled: false }
  },
  plotOptions: {
    bar: {
      columnWidth: '96%',
      borderRadius: 6,
      distributed: true
    }
  },
  colors: ['#e0e7ff', '#c7d2fe', '#a5b4fc', '#6366f1', '#4338ca'],
  dataLabels: { enabled: false },
  legend: { show: false },
  tooltip: { enabled: false },
  states: {
    hover: { filter: { type: 'none' } },
    active: { filter: { type: 'none' } }
  },
  grid: { show: false }
});
subscribersChart.render();





// ================================ Recent Orders - DataTable ================================
$(document).ready(function () {
  const table = $("#recentOrdersTable").DataTable({
    pageLength: 11,
    lengthMenu: [11, 25, 50, 100],
    ordering: true,
    info: false,
    searching: false,
    dom: "tp",
    language: {
      paginate: {
        previous: '<i class="ph ph-caret-left"></i>',
        next: '<i class="ph ph-caret-right"></i>',
      },
    },
  });
  // Hide pagination UI
  $(table.table().container()).find(".dt-paging").hide();
});
