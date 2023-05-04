import { LogoutLink } from "./LogoutLink";
import { Axios } from "axios";
import { StudentShow } from "./StudentShow";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Login } from "./Login";

export function Content() {
  // const [student, setstudent] = useState([]);
  // const [students, setStudents] = useState({});

  const students = {
    id: 1,
    first_name: "Leah ",
    last_name: "Perri",
    email: "leah@example.com",
    phone_number: "123.456.7890",
    bio: "I'm super kewl.",
    linkedin_url: "linkedin.com/leah",
    twitter_url: "twitter.com/leah",
    website: "leah.com",
    student_url: "leahstudent.googledocs.com",
    github: "github.com/leah",
    photo: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
  };

  const handleUpdateStudent = (id, params, successCallback) => {
    console.log("handleUpdateStudent", params);
    students.map((student) => {
      if (student.id === response.data.id) {
        return response.data;
      } else {
        return student;
      }
    });

    successCallback();
    // handleClose();
  };

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<StudentShow student={students} onUpdateStudent={handleUpdateStudent} />} />
      </Routes>
    </div>
  );
}
