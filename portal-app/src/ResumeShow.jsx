/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export function ResumeShow(props) {
  return (
    <div id="resume-show">
      <h1>My Resume</h1>
      <div className="resume-container">
        <div id="resume-name">
          {props.resume.first_name}
          {props.resume.last_name}
        </div>
        <div id="resume-email">{props.resume.email}</div>
        <div id="resume-phone">{props.resume.phone_number}</div>
        <div id="resume-bio">{props.resume.bio}</div>
        <div id="resume-linkedin">{props.resume.linkedin_url}</div>
        <div id="resume-twitter">{props.resume.twitter_url}</div>
        <div id="resume-website">{props.resume.website}</div>
        <div id="resume-resume-url">{props.resume.resume_url}</div>
        <div id="resume-github">{props.resume.github}</div>
        <div id="resume-photo">
          <img src={props.resume.photo} />
        </div>
      </div>
    </div>
  );
}
