import { useState } from "react";

export function ResumeShow(props) {
  return (
    <div id="resume-show">
      <h1>Update Resume</h1>
      {props.resumes.map((resume) => (
        <div key={resume.id}>
          <h2>{resume.name}</h2>
          <p>{resume.email}</p>
        </div>
      ))}
    </div>
  );
}
