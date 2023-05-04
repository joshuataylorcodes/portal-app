import { LogoutLink } from "./LogoutLink";
import { Axios } from "axios";
import { StudentShow } from "./StudentShow";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Login } from "./Login";
import { Modal } from "./Modal";

export function Content() {
  const [students, setStudents] = useState([]);

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
        <Route path="/login" element={<Login students={students} />} />
        <Route
          path="/students/:id"
          element={<StudentShow students={students} onUpdateStudent={handleUpdateStudent} />}
        />
        <Route path="/logout" element={<LogoutLink students={students} />} />
      </Routes>
    </div>
  );
}
