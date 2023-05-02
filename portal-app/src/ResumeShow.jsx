import { useState } from "react";

export function ResumeShow(props) {
  return (
    <div id="resume-show">
      <h1>Update Resume</h1>
      {props.resumes.map((resume) => (
        <div key={resume.id}>
          <form>
            <h2>
              Name <input defaultValue={resume.name} type="text" />{" "}
            </h2>
            <h2>
              Email <input defaultValue={resume.email} type="text" />{" "}
            </h2>
          </form>
        </div>
      ))}
    </div>
  );
}
