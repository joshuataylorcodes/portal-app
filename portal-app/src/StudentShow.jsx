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

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      const alertBox = document.createElement("div");
      alertBox.innerText = "Copied to clipboard!";
      alertBox.style = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px;
        background-color: rgba(253, 253, 253, 0.8);
        border: 1px solid black;
        border-radius: 5px;
        color: black;
        font-size: 1.2rem;
        font-weight: bold;
      `;
      document.body.appendChild(alertBox);
      setTimeout(() => {
        document.body.removeChild(alertBox);
      }, 2000);
    });
  };

  const handleEmailClick = () => {
    copyToClipboard(student.email);
  };
  const handleTwitterClick = () => {
    copyToClipboard(student.twitter_handle || "");
  };
  const handleLinkedInClick = () => {
    copyToClipboard(student.resume_url || "");
  };
  const handleGitHubClick = () => {
    copyToClipboard(student.github_url || "");
  };
  const handlePhoneClick = () => {
    copyToClipboard(student.phone_number || "");
  };
  const handleWebsiteClick = () => {
    copyToClipboard(student.website_url || "");
  };

  return (
    <div id="resume-show">
      <h1>{student.first_name}'s Resume</h1>
      <div className="resume-container">
        <div id="resume-name">
          {student.first_name} {student.last_name}
        </div>
        <div className="resume-bio">{student.short_bio}</div>

        <div id="resume-photo">
          <img src={student.image_url} />
        </div>
        <div id="social-icons">
          <a href="#" className="fa fa-envelope" onClick={handleEmailClick}></a>

          <a
            href="#"
            className="fa fa-twitter"
            onClick={handleTwitterClick}
          ></a>
          <a
            href={student.resume_url}
            className="fa fa-linkedin-square"
            onClick={handleLinkedInClick}
          ></a>
          <a
            href={student.github_url}
            className="fa fa-github-square"
            onClick={handleGitHubClick}
          ></a>
          <a
            href="#"
            className="fa fa-phone-square"
            onClick={handlePhoneClick}
          ></a>
          <a
            href={student.website_url}
            className="fa fa-globe"
            onClick={handleWebsiteClick}
          ></a>
        </div>
      </div>
    </div>
  );
}
