import { useState } from "react";

const handleResumeShow = () => {
  console.log("God? Dad?");
};
export function ResumeShow(props) {
  return (
    <div id="resume-show">
      <h1>My Resume</h1>
      <div className="resume-container">
        <div id="resume-name">
          {props.first_name}
          {props.last_name}
        </div>
        <div id="resume-email">{props.email}</div>
        <div id="resume-phone">{props.phone_number}</div>
        <div id="resume-bio">{props.bio}</div>
        <div id="resume-linkedin">{props.linkedin_url}</div>
        <div id="resume-twitter">{props.twitter_url}</div>
        <div id="resume-website">{props.website}</div>
        <div id="resume-resume-url">{props.resume_url}</div>
        <div id="resume-github">{props.github}</div>
        <div id="resume-photo">
          <img src={props.photo} />
        </div>
      </div>
    </div>
  );
}
