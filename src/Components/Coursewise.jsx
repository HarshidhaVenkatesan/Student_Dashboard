import React from "react";
import Chart from "react-apexcharts";
import input from "../Data/input.json";
import ApexCharts from "react-apexcharts";

function Coursewise() {
  
  // Function to group courses by course code
  const groupByCourse = (courses) => {
    const courseData = {};
    courses.forEach((course) => {
      if (!courseData.hasOwnProperty(course.course_code)) {
        courseData[course.course_code] = [];
      }
      courseData[course.course_code].push(course);
    });
    return courseData;
  };

  // Function to calculate average grade for each course
  const calculateAverageGrade = (courses) => {
    const courseData = groupByCourse(courses);
    const averageGrades = {};
    for (const courseCode in courseData) {
      if (courseData.hasOwnProperty(courseCode)) {
        const totalGradePoints = courseData[courseCode].reduce(
          (total, course) => {
            return total + getGradePoints(course.grade);
          },
          0
        );
        averageGrades[courseCode] =
          totalGradePoints / courseData[courseCode].length;
      }
    }
    return averageGrades;
  };
  // Function to convert grade to grade points
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
  // Calculate average grade for each course
  const averageGrades = calculateAverageGrade(input);
  console.log(averageGrades);

  const options = {
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: Object.keys(averageGrades),
      title: {
        text: "SUBJECT CODE",
      },
      style: {
        colors: "#78A1FF",
      },
      labels: {
        style: {
          colors: "#78A1FF",
        },
      },
    },
    yaxis: {
      min: 1,
      max: 10,
      title: {
        text: "AVERAGE GRADE",
      },
      style: {
        colors: "#78A1FF",
      },
      labels: {
        style: {
          colors: "#78A1FF",
        },
      },
    },
    title: {
      text: "Course wise Grade Points",
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
    fill: {
      opacity: 1,
    },

    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
      theme: "dark",
    },
  };
  const chartData = Object.values(averageGrades);

  return (
    <div className="course-chart">
      <ApexCharts options={options} series={[{ data: chartData }]} type="bar" />
    </div>
  );
}

export default Coursewise;
