/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export function StudentShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateStudent(props.student.id, params);
    event.target.reset();
  };

  return (
    <div id="student-show">
      <h1>My student</h1>
      <div className="student-container">
        <div id="resume-name">
          {props.student.first_name}
          {props.student.last_name}
        </div>
        <div id="student-email">{props.student.email}</div>
        <div id="student-phone">{props.student.phone_number}</div>
        <div id="student-bio">{props.student.bio}</div>
        <div id="student-linkedin">{props.student.linkedin_url}</div>
        <div id="student-twitter">{props.student.twitter_url}</div>
        <div id="student-website">{props.student.website}</div>
        <div id="student-student-url">{props.student.student_url}</div>
        <div id="student-github">{props.student.github}</div>
        <div id="student-photo">
          <img src={props.student.photo} />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          Email: <input defaultValue={props.student.email} name="email" type="text" />
        </div>
        <div>
          Phone Number: <input defaultValue={props.student.phone_number} name="phone_number" type="text" />
        </div>
        <div>
          Bio: <input defaultValue={props.student.bio} name="bio" type="text" />
        </div>
        <button type="submit"> Update the student</button>
      </form>
    </div>
  );
}
