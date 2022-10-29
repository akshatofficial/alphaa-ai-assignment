const Config = (
  xAxis_data,
  totalData,
  rightXaxis,
  leftXaxis,
  TotalXaxis,
  netSum
) => {
  const config = {
    title: {
      text: "Accumulated Waterfall Chart",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["Loss", "Profit"],
    },
    xAxis: {
      type: "category",
      data: xAxis_data,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Before value",
        type: "bar",
        stack: "Total",
        itemStyle: {
          borderColor: "transparent",
          color: "transparent",
        },
        barWidth: "80%",
        emphasis: {
          itemStyle: {
            borderColor: "transparent",
            color: "transparent",
          },
        },
        data: totalData,
      },
      {
        name: "Profit",
        type: "bar",
        stack: "Total",
        label: {
          show: true,
          position: "top",
        },
        barWidth: "80%",
        data: netSum < 0 ? rightXaxis : leftXaxis,
        itemStyle: {
          borderColor: "#72f795",
          color: "#72f795",
        },
      },
      {
        name: "Loss",
        type: "bar",
        stack: "Total",
        label: {
          show: true,
          position: "bottom",
        },
        barWidth: "80%",
        data: netSum > 0 ? rightXaxis : leftXaxis,
        itemStyle: {
          borderColor: "#ff4b33",
          color: "#ff4b33",
        },
      },
      {
        name: "total",
        type: "bar",
        stack: "Total",
        label: {
          show: true,
          position: "top",
        },
        barWidth: "80%",
        data: TotalXaxis,
        itemStyle: {
          borderColor: "#33fff1",
          color: "#33fff1",
        },
      },
    ],
  };
  return config;
};

export default Config;
