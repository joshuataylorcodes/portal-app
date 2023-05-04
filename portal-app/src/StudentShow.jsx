/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function StudentShow() {
  const [student, setStudent] = useState([]);
  const params = useParams();

  const handleShowStudent = () => {
    axios
      .get(`http://localhost:3000/students/${params.id}.json`)
      .then((response) => {
        setStudent(response.data);
      });
  };

  useEffect(handleShowStudent, []);

  return (
    <div id="resume-show">
      <h1>Resume</h1>
      <div className="resume-container">
        <div id="resume-name">
          {student.first_name}
          {student.last_name}
        </div>
        <div className="resume-bio">{student.short_bio}</div>
        <div id="resume-email">{student.email}</div>
        <div id="resume-phone">{student.phone_number}</div>

        <div id="resume-linkedin">{student.linkedin_url}</div>
        <div id="resume-twitter">{student.twitter_handle}</div>
        <div id="resume-website">{student.website_url}</div>
        <div id="resume-resume-url">{student.resume_url}</div>
        <div id="resume-github">{student.github_url}</div>
        <div id="resume-photo">
          <img src={student.image_url} />
        </div>
        <div id="social-icons">
          <a href={student.email} className="fa fa-envelope"></a>

          <a href={student.twitter_handle} className="fa fa-twitter"></a>
          <a href={student.resume_url} className="fa fa-linkedin-square"></a>
          <a href={student.resume_url} className="fa fa-github-square"></a>
          <a href={student.phone_number} className="fa fa-phone-square"></a>
          <a href={student.resume_url} className="fa fa-globe"></a>
        </div>
      </div>
    </div>
  );
}
