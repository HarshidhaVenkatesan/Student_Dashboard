import React from "react";
import Chart from "react-apexcharts";
import input from "../Data/input.json";

function CGPA(props) {
  const regno = props.data;

  const userData = input.filter((data) => {
    const inputData = data.register_number.toString().trim();
    const inputDataToMatch = regno.toString().trim();
    return inputData.toLowerCase() === inputDataToMatch.toLowerCase();
  });
  // Initialize an object to store GPA for each semester
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

  // labels: ["CGPA"],
  // title: {
  //   text: `CGPA of ${regno}%`,
  //   align: "center",
  //   margin: 20,
  //   offsetY: -10,
  //   style: {
  //     fontSize: "16px",
  //     fontWeight: "bold",
  //     color: "#78A1FF",
  //   },
  // },
  // plotOptions: {
  //   radialBar: {
  //     startAngle: -135,
  //     endAngle: 135,
  //     dataLabels: {
  //       name: {
  //         fontSize: "12px",
  //         color: "#78A1FF",
  //         offsetY: -10,
  //       },
  //       value: {
  //         offsetY: 4,
  //         fontSize: "16px",
  //         color: "#78A1FF",
  //         formatter: function (val) {
  //           return val.toFixed(2);
  //         },
  //       },
  //     },
  //   },
  // },
  // stroke: {
  //   lineCap: "round",
  // },
  // colors: ["#FFC107"]
  const chartOptions = {
    chart: {
      height: 280,
      type: "radialBar",
      scale: {
        range: {
          min: 0,
          max: 10,
        },
      },
    },
    colors: ["#20E647"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "60%",
          background: "#293846",
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15,
          },
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: "#fff",
            fontSize: "13px",
          },
          value: {
            color: "#fff",
            fontSize: "30px",
            show: true,
          },
        },
        max: 10,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#87D4F9"],
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["CGPA"],
  };

  const chartSeries = [cgpa.toFixed(2)];

  return (
    <div className="CGPA-cont">
      <Chart options={chartOptions} series={chartSeries} type="radialBar" />
    </div>
  );
}

export default CGPA;
