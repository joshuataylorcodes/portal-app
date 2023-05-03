/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export function ResumeShow(props) {
  return (
    <div id="resume-show">
      <h1>Name's Resume</h1>
      <div className="resume-container">
        <div id="resume-name">
          {props.resume.first_name}
          {props.resume.last_name}
        </div>
        <div className="resume-bio">{props.resume.short_bio}</div>
        <div id="resume-email">{props.resume.email}</div>
        <div id="resume-phone">{props.resume.phone_number}</div>

        <div id="resume-linkedin">{props.resume.linkedin_url}</div>
        <div id="resume-twitter">{props.resume.twitter_handle}</div>
        <div id="resume-website">{props.resume.website_url}</div>
        <div id="resume-resume-url">{props.resume.resume_url}</div>
        <div id="resume-github">{props.resume.github_url}</div>
        <div id="resume-photo">
          <img src={props.resume.image_url} />
        </div>
        <div id="social-icons">
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-linkedin-square"></a>
          <a href="#" class="fa fa-github-square"></a>
          <a href="#" class="fa fa-phone-square"></a>
          <a href="#" class="fa fa-globe"></a>
        </div>
      </div>
    </div>
  );
}
