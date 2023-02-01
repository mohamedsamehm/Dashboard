(function () {
  var circle1 = document.getElementById("circle-chart-1");
  var circle2 = document.getElementById("circle-chart-2");
  var circle3 = document.getElementById("circle-chart-3");
  var circleChart1 = echarts.init(circle1, null, {
    width: window.innerWidth > 1400 ? 110 : 86.8,
    height: window.innerWidth > 1400 ? 110 : 86.8,
  });
  var optionCircle1;
  var optionCircle2;
  var optionCircle3;
  var perYear1 = 10;
  var perYear2 = 20;
  var perYear3 = 30;
  var circleChart2 = echarts.init(circle2, null, {
    width: window.innerWidth > 1400 ? 110 : 86.8,
    height: window.innerWidth > 1400 ? 110 : 86.8,
  });
  var circleChart3 = echarts.init(circle3, null, {
    width: window.innerWidth > 1400 ? 110 : 86.8,
    height: window.innerWidth > 1400 ? 110 : 86.8,
  });

  optionCircle1 = {
    series: [
      {
        type: "gauge",
        startAngle: 270,
        endAngle: -450,
        padding: 0,
        max: 30,
        pointer: {
          show: false,
        },
        progress: {
          show: true,
          overlap: false,
          itemStyle: {
            color: "#009be2",
            borderColor: "#009be2",
            borderWidth: 1,
            backgroundColor: "#43515a",
          },
        },
        axisLine: {
          lineStyle: {
            width: 10,
            color: [[1, "#43515a"]],
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        data: [
          {
            value: perYear1,
            name: "%",
            title: {
              color: "white",
              offsetCenter: ["0%", "-20%"],
              fontSize: window.innerWidth > 1400 ? 30 : 23.6735,
              fontWeight: 500,
              fontFamily: "Roboto",
            },
            detail: {
              show: false,
              show: true,
              fontSize: window.innerWidth > 1400 ? 18 : 14,
              fontWeight: 300,
              fontFamily: "Roboto",
              color: "white",
              offsetCenter: ["0%", "25%"],
              formatter: function (value) {
                return "per year";
              },
            },
          },
        ],
        radius: "100%",
        title: {
          fontSize: 14,
        },
      },
    ],
  };
  optionCircle2 = {
    series: [
      {
        type: "gauge",
        startAngle: 270,
        endAngle: -450,
        padding: 0,
        max: 30,
        pointer: {
          show: false,
        },
        progress: {
          show: true,
          overlap: false,
          itemStyle: {
            color: "#be5ef2",
            borderColor: "#be5ef2",
            borderWidth: 1,
            backgroundColor: "#43515a",
          },
        },
        axisLine: {
          lineStyle: {
            width: 10,
            color: [[1, "#43515a"]],
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        data: [
          {
            value: perYear2,
            name: "%",
            title: {
              color: "white",
              offsetCenter: ["0%", "-20%"],
              fontSize: window.innerWidth > 1400 ? 30 : 23.6735,
              fontWeight: 500,
              fontFamily: "Roboto",
            },
            detail: {
              show: false,
              show: true,
              fontSize: window.innerWidth > 1400 ? 18 : 14,
              fontWeight: 300,
              fontFamily: "Roboto",
              color: "white",
              offsetCenter: ["0%", "25%"],
              formatter: function (value) {
                return "per year";
              },
            },
          },
        ],
        radius: "100%",
        title: {
          fontSize: 14,
        },
      },
    ],
  };
  optionCircle3 = {
    series: [
      {
        type: "gauge",
        startAngle: 270,
        endAngle: -450,
        padding: 0,
        max: 30,
        pointer: {
          show: false,
        },
        progress: {
          show: true,
          overlap: false,
          itemStyle: {
            color: "#ff7100",
            borderColor: "#ff7100",
            borderWidth: 1,
            backgroundColor: "#43515a",
          },
        },
        axisLine: {
          lineStyle: {
            width: 10,
            color: [[1, "#43515a"]],
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        data: [
          {
            value: perYear3,
            name: "%",
            title: {
              color: "white",
              offsetCenter: ["0%", "-20%"],
              fontSize: window.innerWidth > 1400 ? 30 : 23.6735,
              fontWeight: 500,
              fontFamily: "Roboto",
            },
            detail: {
              show: false,
              show: true,
              fontSize: window.innerWidth > 1400 ? 18 : 14,
              fontWeight: 300,
              fontFamily: "Roboto",
              color: "white",
              offsetCenter: ["0%", "25%"],
              formatter: function (value) {
                return "per year";
              },
            },
          },
        ],
        radius: "100%",
        title: {
          fontSize: 14,
        },
      },
    ],
  };

  optionCircle1 && circleChart1.setOption(optionCircle1);
  optionCircle2 && circleChart2.setOption(optionCircle2);
  optionCircle3 && circleChart3.setOption(optionCircle3);

  // Stacked Area

  var stacked1 = document.getElementById("stacked-chart-1");
  var stackedChart1 = echarts.init(stacked1, null, {
    width: 153,
    height: 125,
  });
  var optionStacked1;

  optionStacked1 = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
      top: "13",
      bottom: "20",
      right: "10",
      left: "32",
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        data: ["07/22", "08/22", "09/22", "10/22", "11/22", "12/22", "01/23"],
        axisLine: {
          show: true,
          lineStyle: {
            color: "#FFFFFF",
          },
        },
        nameGap: 8,
        axisLabel: {
          color: "rgba(255, 255, 255, 0.75)",
          fontFamily: "Play",
          fontWeight: 400,
          fontSize: 9,
        },
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        splitLine: { show: false },
        axisLine: {
          show: true,
          lineStyle: {
            color: "white",
          },
        },
        splitNumber: 2,
        nameGap: 9,
        axisLabel: {
          formatter: function (value) {
            return value > 0 ? value / 1000 + "K" : 0;
          },
          color: "rgba(255, 255, 255, 0.75)",
          fontFamily: "Play",
          fontWeight: 400,
          fontSize: 9,
        },
      },
    ],
    series: [
      {
        name: "Line 1",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          color: "#6e84bb",
        },
        emphasis: {
          focus: "series",
        },
        data: [100, 130, 250, 400, 350, 500, 750, 700],
      },
    ],
  };

  optionStacked1 && stackedChart1.setOption(optionStacked1);

  // Stacked Area 2
  var stacked2 = document.getElementById("stacked-chart-2");
  var stackedChart2 = echarts.init(stacked2, null, {
    width: 153,
    height: 125,
  });
  var optionStacked2;

  optionStacked2 = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
      top: "13",
      bottom: "20",
      right: "10",
      left: "32",
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        data: ["07/22", "08/22", "09/22", "10/22", "11/22", "12/22", "01/23"],
        axisLine: {
          show: true,
          lineStyle: {
            color: "#FFFFFF",
          },
        },
        nameGap: 8,
        hideOverlap: true,
        axisLabel: {
          showMaxLabel: true,
          color: "rgba(255, 255, 255, 0.75)",
          fontFamily: "Play",
          fontWeight: 400,
          fontSize: 9,
        },
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        splitLine: { show: false },
        min: 0,
        max: 1000,
        axisLine: {
          show: true,
          lineStyle: {
            color: "white",
          },
        },
        splitNumber: 2,
        nameGap: 9,
        axisLabel: {
          formatter: function (value) {
            return value > 0 ? value / 1000 + "K" : 0;
          },
          color: "rgba(255, 255, 255, 0.75)",
          fontFamily: "Play",
          fontWeight: 400,
          fontSize: 9,
        },
      },
    ],
    series: [
      {
        name: "Line 1",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          color: "#efb77a",
        },
        emphasis: {
          focus: "series",
        },
        data: [100, 130, 250, 400, 350, 500, 750, 700],
      },
    ],
  };

  optionStacked2 && stackedChart2.setOption(optionStacked2);

  // Stacked Area 3
  var stacked3 = document.getElementById("stacked-chart-3");
  var stackedChart3 = echarts.init(stacked3, null, {
    width: 153,
    height: 125,
  });
  var optionStacked3;

  optionStacked3 = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
      top: "13",
      bottom: "20",
      right: "10",
      left: "32",
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        data: ["07/22", "08/22", "09/22", "10/22", "11/22", "12/22", "01/23"],
        axisLine: {
          show: true,
          lineStyle: {
            color: "#FFFFFF",
          },
        },
        nameGap: 8,
        hideOverlap: true,
        axisLabel: {
          showMaxLabel: true,
          color: "rgba(255, 255, 255, 0.75)",
          fontFamily: "Play",
          fontWeight: 400,
          fontSize: 9,
        },
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        splitLine: { show: false },
        min: 0,
        max: 1000,
        axisLine: {
          show: true,
          lineStyle: {
            color: "white",
          },
        },
        splitNumber: 2,
        nameGap: 9,
        axisLabel: {
          formatter: function (value) {
            return value > 0 ? value / 1000 + "K" : 0;
          },
          color: "rgba(255, 255, 255, 0.75)",
          fontFamily: "Play",
          fontWeight: 400,
          fontSize: 9,
        },
      },
    ],
    series: [
      {
        name: "Line 1",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          color: "#7d76bc",
        },
        emphasis: {
          focus: "series",
        },
        data: [100, 130, 250, 400, 350, 500, 750, 700],
      },
    ],
  };

  optionStacked3 && stackedChart3.setOption(optionStacked3);

  // Stacked Area 4
  var stacked4 = document.getElementById("stacked-chart-4");
  var stackedChart4 = echarts.init(stacked4, null, {
    width: 153,
    height: 125,
  });
  var optionStacked4;

  optionStacked4 = {
    color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
      top: "13",
      bottom: "20",
      right: "10",
      left: "32",
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        data: ["07/22", "08/22", "09/22", "10/22", "11/22", "12/22", "01/23"],
        axisLine: {
          show: true,
          lineStyle: {
            color: "#FFFFFF",
          },
        },
        nameGap: 8,
        hideOverlap: true,
        axisLabel: {
          showMaxLabel: true,
          color: "rgba(255, 255, 255, 0.75)",
          fontFamily: "Play",
          fontWeight: 400,
          fontSize: 9,
        },
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        splitLine: { show: false },
        min: 0,
        max: 1000,
        axisLine: {
          show: true,
          lineStyle: {
            color: "white",
          },
        },
        splitNumber: 2,
        nameGap: 9,
        axisLabel: {
          formatter: function (value) {
            return value > 0 ? value / 1000 + "K" : 0;
          },
          color: "rgba(255, 255, 255, 0.75)",
          fontFamily: "Play",
          fontWeight: 400,
          fontSize: 9,
        },
      },
    ],
    series: [
      {
        name: "Line 1",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          color: "#ea8950",
        },
        emphasis: {
          focus: "series",
        },
        data: [100, 130, 250, 400, 350, 500, 750, 700],
      },
    ],
  };

  optionStacked4 && stackedChart4.setOption(optionStacked4);

  // Top Chart
  let noOfXaxis = 7;
  let days = [
    "2022-07-01",
    "2022-07-02",
    "2022-07-03",
    "2022-07-04",
    "2022-07-05",
    "2022-07-06",
    "2022-07-07",
    "2022-07-08",
    "2022-07-09",
    "2022-07-10",
    "2022-07-11",
    "2022-07-12",
    "2022-07-13",
    "2022-07-14",
    "2022-07-15",
    "2022-07-16",
    "2022-07-17",
    "2022-07-18",
    "2022-07-19",
    "2022-07-20",
    "2022-07-21",
    "2022-07-22",
    "2022-07-23",
    "2022-07-24",
    "2022-07-25",
    "2022-07-26",
    "2022-07-27",
    "2022-07-28",
    "2022-07-29",
    "2022-07-30",
    "2022-07-31",
    "2022-08-01",
    "2022-08-02",
    "2022-08-03",
    "2022-08-04",
    "2022-08-05",
    "2022-08-06",
    "2022-08-07",
    "2022-08-08",
    "2022-08-09",
    "2022-08-10",
    "2022-08-11",
    "2022-08-12",
    "2022-08-13",
    "2022-08-14",
    "2022-08-15",
    "2022-08-16",
    "2022-08-17",
    "2022-08-18",
    "2022-08-19",
    "2022-08-20",
    "2022-08-21",
    "2022-08-22",
    "2022-08-23",
    "2022-08-24",
    "2022-08-25",
    "2022-08-26",
    "2022-08-27",
    "2022-08-28",
    "2022-08-29",
    "2022-08-30",
    "2022-08-31",
    "2022-09-01",
    "2022-09-02",
    "2022-09-03",
    "2022-09-04",
    "2022-09-05",
    "2022-09-06",
    "2022-09-07",
    "2022-09-08",
    "2022-09-09",
    "2022-09-10",
    "2022-09-11",
    "2022-09-12",
    "2022-09-13",
    "2022-09-14",
    "2022-09-15",
    "2022-09-16",
    "2022-09-17",
    "2022-09-18",
    "2022-09-19",
    "2022-09-20",
    "2022-09-21",
    "2022-09-22",
    "2022-09-23",
    "2022-09-24",
    "2022-09-25",
    "2022-09-26",
    "2022-09-27",
    "2022-09-28",
    "2022-09-29",
    "2022-09-30",
    "2022-10-01",
    "2022-10-02",
    "2022-10-03",
    "2022-10-04",
    "2022-10-05",
    "2022-10-06",
    "2022-10-07",
    "2022-10-08",
    "2022-10-09",
    "2022-10-10",
    "2022-10-11",
    "2022-10-12",
    "2022-10-13",
    "2022-10-14",
    "2022-10-15",
    "2022-10-16",
    "2022-10-17",
    "2022-10-18",
    "2022-10-19",
    "2022-10-20",
    "2022-10-21",
    "2022-10-22",
    "2022-10-23",
    "2022-10-24",
    "2022-10-25",
    "2022-10-26",
    "2022-10-27",
    "2022-10-28",
    "2022-10-29",
    "2022-10-30",
    "2022-10-31",
    "2022-11-01",
    "2022-11-02",
    "2022-11-03",
    "2022-11-04",
    "2022-11-05",
    "2022-11-06",
    "2022-11-07",
    "2022-11-08",
    "2022-11-09",
    "2022-11-10",
    "2022-11-11",
    "2022-11-12",
    "2022-11-13",
    "2022-11-14",
    "2022-11-15",
    "2022-11-16",
    "2022-11-17",
    "2022-11-18",
    "2022-11-19",
    "2022-11-20",
    "2022-11-21",
    "2022-11-22",
    "2022-11-23",
    "2022-11-24",
    "2022-11-25",
    "2022-11-26",
    "2022-11-27",
    "2022-11-28",
    "2022-11-29",
    "2022-11-30",
    "2022-12-01",
    "2022-12-02",
    "2022-12-03",
    "2022-12-04",
    "2022-12-05",
    "2022-12-06",
    "2022-12-07",
    "2022-12-08",
    "2022-12-09",
    "2022-12-10",
    "2022-12-11",
    "2022-12-12",
    "2022-12-13",
    "2022-12-14",
    "2022-12-15",
    "2022-12-16",
    "2022-12-17",
    "2022-12-18",
    "2022-12-19",
    "2022-12-20",
    "2022-12-21",
    "2022-12-22",
    "2022-12-23",
    "2022-12-24",
    "2022-12-25",
    "2022-12-26",
    "2022-12-27",
    "2022-12-28",
    "2022-12-29",
    "2022-12-30",
    "2022-12-31",
    "2023-01-01",
    "2023-01-02",
    "2023-01-03",
    "2023-01-04",
    "2023-01-05",
    "2023-01-06",
    "2023-01-07",
    "2023-01-08",
    "2023-01-09",
    "2023-01-10",
    "2023-01-11",
    "2023-01-12",
    "2023-01-13",
    "2023-01-14",
    "2023-01-15",
    "2023-01-16",
    "2023-01-17",
    "2023-01-18",
    "2023-01-19",
    "2023-01-20",
    "2023-01-21",
    "2023-01-22",
    "2023-01-23",
    "2023-01-24",
    "2023-01-25",
    "2023-01-26",
    "2023-01-27",
    "2023-01-28",
    "2023-01-29",
    "2023-01-30",
  ];
  function generateData() {
    let data = [];
    for (let i = 0; i < days.length; i++) {
      data.push(i);
    }
    return data;
  }
  var dailyBurnChartId = document.getElementById("daily-burn-chart");
  var dailyBurnChart = echarts.init(dailyBurnChartId, null, {
    height: 150,
  });
  var option;

  option = {
    grid: {
      left: 25,
      right: 20,
      top: 24,
      bottom: 20,
    },
    xAxis: {
      type: "category",
      boundaryGap: true,
      data: days,
      max: 250,
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "rgba(255, 255, 255, 0.75)",
        inside: true,
        hideOverlap: true,
        align: "left",
        verticalAlign: "center",
        fontFamily: "Play",
        fontWeight: 400,
        fontSize: 14,
        padding: 16,
        interval: Math.floor(days.length / noOfXaxis),
        formatter: function (value) {
          return value ? echarts.format.formatTime("MM/yy", value) : "";
        },
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#FFFFFF",
        },
      },
    },
    yAxis: {
      type: "value",
      boundaryGap: ["100%", "0%"],
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#FFFFFF",
        },
      },
      splitLine: {
        show: false,
      },
      alignTicks: true,
      axisTick: {
        show: false,
      },
    },
    series: [
      {
        data: generateData(),
        type: "line",
        smooth: 0.6,
        symbol: "none",
        markPoint: {
          symbol:
            "image://data:image/svg+xml,%3Csvg width='46' height='46' viewBox='0 0 46 46' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='23' cy='23' r='10.75' stroke='%23FF6A16' stroke-width='0.5' stroke-dasharray='1 1'/%3E%3Cg filter='url(%23filter0_d_0_1)'%3E%3Ccircle cx='23' cy='23' r='8' fill='%23FF6A16' fill-opacity='0.5' shape-rendering='crispEdges'/%3E%3C/g%3E%3Ccircle cx='23' cy='23' r='4' fill='white'/%3E%3Ccircle cx='23' cy='23' r='4' fill='white'/%3E%3Cdefs%3E%3Cfilter id='filter0_d_0_1' x='0' y='0' width='46' height='46' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset/%3E%3CfeGaussianBlur stdDeviation='7.5'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 0.415216 0 0 0 0 0.0862745 0 0 0 1 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_0_1'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_0_1' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A",
          symbolKeepAspect: true,
          data: [
            {
              type: "max",
              valueIndex: 0,
            },
          ],
          label: {
            show: true,
            position: "bottom",
            distance: 35,
            color: "white",
            fontWeight: 400,
            fontFamily: "Play",
            fontSize: 14,
            backgroundColor: "rgba(17, 27, 34, 0.8)",
            padding: 11,
            width: 79,
            // height: 26,
            borderRadius: 30,
          },
        },
        lineStyle: {
          color: "#ff5c00",
          width: 4,
          shadowColor: "rgba(255, 106, 22, 0.6)",
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowBlur: 15,
        },
      },
    ],
  };

  option && dailyBurnChart.setOption(option);
})();
