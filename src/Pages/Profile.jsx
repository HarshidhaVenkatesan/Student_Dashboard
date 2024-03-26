import React from "react";
import Marks from "../Components/Marks";
import Course from "../Components/Course";
import SubjectDonut from "../Components/SubjectDonut";
import Data from "../Components/Data";
import CGPA from "../Components/CGPA";

function Profile(props) {
  const regno = props.data;
  const year = props.data.toString().slice(0, 4);
  let leaveYr = props.data.toString().slice(0, 4);
  leaveYr = parseInt(leaveYr) + 5;
  console.log("Year : ", leaveYr);
  const d = new Date();
  let curYear = d.getFullYear();
  curYear = curYear - year;
  return (
    <div className="prof-cont">
      <div className="info-container">
        <div className="info">
          <Data data={regno} title={"Register Number"} />
        </div>
        <div className="info">
          <Data data={year} title={"Year of Joining"} />
        </div>
        <div className="info">
          <Data data={curYear} title={"Current Year of study"} />
        </div>
        <div className="info">
          <Data data={leaveYr} title={"Year of Leaving"} />
        </div>
      </div>
      <h2>CGPA obtained so far</h2>
      <CGPA data={regno} />
      <h2>Distribution of Grades obtained in each semester</h2>
      <SubjectDonut data={regno} />
      <h2>GPA scored across each semester</h2>
      <Marks data={regno} />
      <h2>Grades scored in each subject so far</h2>
      <Course data={regno} />
    </div>
  );
}

export default Profile;
