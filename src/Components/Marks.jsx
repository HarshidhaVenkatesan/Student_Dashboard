import React from "react";
import Chart from "react-apexcharts";
import input from "../Data/input.json";

function Marks(props) {
  const regno = props.data;

  const userData = input.filter((data) => {
    const inputData = data.register_number.toString().trim();
    const inputDataToMatch = regno.toString().trim();
    return inputData.toLowerCase() === inputDataToMatch.toLowerCase();
  });

  // Initialize an object to store GPA for each semester
  const semesterGPAs = {};

  const calculateGPA = (studentData) => {
    let totalCredits = 0;
    let totalGradePoints = 0;

    studentData.forEach((data) => {
      totalCredits += data.credits;
      totalGradePoints += getGradePoints(data.grade) * data.credits;
    });

    return totalGradePoints / totalCredits;
  };

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

  //Group courses by semester
  const dataBySemester = {};
  userData.forEach((data) => {
    if (!dataBySemester[data.semester]) {
      dataBySemester[data.semester] = [];
    }
    dataBySemester[data.semester].push(data);
  });

  //  Calculate GPA for each semester
  for (const semester in dataBySemester) {
    //Call the calculateGPA function to get the GPA for the semester
    const gpa = calculateGPA(dataBySemester[semester]);
    // Store the calculated GPA in the semesterGPAs object
    semesterGPAs[`Sem ${semester}`] = gpa;
  }
  const semesterNames = Object.keys(semesterGPAs);
  const semesterGPAValues = Object.values(semesterGPAs);

  const chartOptions = {
    chart: {
      id: "semester-gpa-chart",
      type: "line",
    },
    xaxis: {
      text: "SEMESTER",
      categories: semesterNames,
      labels: {
        style: {
          colors: "#78A1FF",
        },
      },
    },
    yaxis: {
      min: 1,
      max: 10,
      text: "GPA",
      labels: {
        formatter: function (value) {
          return value.toFixed(2);
        },
        style: {
          colors: "#78A1FF",
        },
      },
    },
    title: {
      text: `Semester-wise GPA of ${regno}`,
      align: "center",
      margin: 10,
      offsetY: 10,
      fontSize: "100px",
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#78A1FF",
        marginBottom: "20px",
      },
    },
    tooltip: {
      style: {
        fontSize: "14px",
        color: "#000000",
      },
      theme: "dark",
    },
    markers: {
      size: 5,
    },

    colors: ["78A1FF"],
  };

  const chartSeries = [
    {
      name: "GPA",
      data: semesterGPAValues,
    },
  ];
  return (
    <div className="GPA-chart">
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={350}
      />
    </div>
  );
}

export default Marks;
