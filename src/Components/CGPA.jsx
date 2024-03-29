import React from "react";
import Chart from "react-apexcharts";
import input from "../Data/input.json";

function CGPA(props) {
  const regno = props.data;

  //Filtering the records of the user
  const userData = input.filter((data) => {
    const inputData = data.register_number.toString().trim();
    const inputDataToMatch = regno.toString().trim();
    return inputData.toLowerCase() === inputDataToMatch.toLowerCase();
  });


  const getGradePoints = (grade) => {
    switch (grade) {
      case "O":
        return 10;
      case "A+":
        return 9;
      case "A":
        return 8;
      case "B+":
        return 7;
      case "B":
        return 6;
      case "C":
        return 5;
      case "RA":
        return 0;
      default:
        return 0;
    }
  };

  let totalGradePoints = 0;
  let totalCredits = 0;
  userData.forEach((data) => {
    totalGradePoints += getGradePoints(data.grade) * data.credits;
    totalCredits += data.credits;
  });

  const cgpa = totalCredits !== 0 ? totalGradePoints / totalCredits : 0;
  const remaining = 10 - cgpa;

  const chartOptions = {
    labels: ["CGPA"],
    title: {
      text: `CGPA of ${regno}`,
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
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        dataLabels: {
          offset: 0,
          minAngleToShowLabel: 10,
        },
      },
    },
    stroke: {
      show: false,
    },
    colors: ["#FFC107", "#2e2e2e"],
  };

  const chartSeries = [cgpa, remaining];

  return (
    <div className="CGPA-cont">
      <Chart options={chartOptions} series={chartSeries} type="donut" />
    </div>
  );
}
export default CGPA;
