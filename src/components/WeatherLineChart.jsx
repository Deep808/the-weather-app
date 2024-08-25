import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { format } from "date-fns";
import "../App.css";

const WeatherLineChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    chartRef.current.chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.map((d) => format(new Date(d.datetime), "MM dd")), // X-axis labels with formatted dates
        datasets: [
          {
            label: "Max Temp",
            data: data.map((d) => d.tempmax),
            borderColor: "#f72a29",
            fill: false,
          },
          {
            label: "Min Temp",
            data: data.map((d) => d.tempmin),
            borderColor: "#00bcd4",
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: "Date",
              color: "#fff",
            },
            ticks: {
              color: "#fff",
            },
          },
          y: {
            title: {
              display: true,
              text: "Temp",
              color: "#fff",
            },
            ticks: {
              color: "#fff",
            },
          },
        },
        plugins: {
          tooltip: {
            backgroundColor: "#000",
          },
        },
      },
    });

    return () => {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
    };
  }, [data]);

  return (
    <div className="hidden md:hidden lg:block xl:block 2xl:block">
      <canvas className="w-[50%] h-[20vh]" ref={chartRef} />
    </div>
  );
};

export default WeatherLineChart;
