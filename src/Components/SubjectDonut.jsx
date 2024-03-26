import React from "react";
import Chart from "react-apexcharts";
import input from "../Data/input.json";

function SubjectDonut(props) {
  const regno = props.data;

  const userData = input.filter((data) => {
    const inputData = data.register_number.toString().trim();
    const inputDataToMatch = regno.toString().trim();
    return inputData.toLowerCase() === inputDataToMatch.toLowerCase();
  });
  console.log("Filtered Data:", userData);

  // Group data by semester
  const groupedData = {};
  userData.forEach((data) => {
    if (!groupedData[data.semester]) {
      groupedData[data.semester] = [];
    }
    groupedData[data.semester].push(data);
  });

  // Generate donut chart data for each semester
  const donutCharts = Object.keys(groupedData).map((semester, index) => {
    const gradesData = {};
    groupedData[semester].forEach((data) => {
      const key = data.grade;
      if (!gradesData[key]) {
        gradesData[key] = 0;
      }
      gradesData[key]++;
    });
    const grades = Object.keys(gradesData);
    const counts = Object.values(gradesData);
    const chartData = {
      options: {
        labels: grades,
        title: {
          text: `Grade Distribution - Semester ${semester}`,
          align: "center",
          margin: 20,
          offsetY: -10,
          style: {
            fontSize: "16px",
            fontWeight: "bold",
            color: "#78A1FF",
          },
        },
        legend: {
          labels: {
            colors: "#78A1FF",
          },
        },
        stroke: {
          show: false,
        },
      },
      series: counts,
    };
    return (
      <div className="Donut-chart">
        <Chart
          key={semester}
          options={chartData.options}
          series={chartData.series}
          type="donut"
        />
      </div>
    );
  });

  return <div className="Donut-container">{donutCharts}</div>;
}
export default SubjectDonut;
