import { LogoutLink } from "./LogoutLink";
import { Axios } from "axios";
import { StudentShow } from "./StudentShow";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Login } from "./Login";
import { Modal } from "./Modal";

export function Content() {
  const [students, setStudents] = useState([]);

  // const students = {
  //   id: 1,
  //   first_name: "Leah ",
  //   last_name: "Perri",
  //   email: "leah@example.com",
  //   phone_number: "123.456.7890",
  //   short_bio:
  //     "In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit­hole, and that means comfort.",
  //   linkedin_url: "linkedin.com/leah",
  //   twitter_handle: "twitter.com/leah",
  //   website_url: "leah.com",
  //   resume_url: "leahresume.googledocs.com",
  //   github_url: "github.com/leah",
  //   image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
  // };

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
        <Route
          path="/students/:id"
          element={<ResumeShow students={students} onUpdateStudent={handleUpdateStudent} />}
        />
      </Routes>
    </div>
  );
}
