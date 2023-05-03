import { LogoutLink } from "./LogoutLink";
import { Axios } from "axios";
import { ResumeShow } from "./ResumeShow";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Login } from "./Login";

export function Content() {
  const [resumes, setResumes] = useState([]);
  const [isResumeShowVisible, setIsResumeShowVisible] = useState(false);
  const [currentResume, setCurrentResume] = useState({});

  // const resumes = [
  //   { id: 1, name: "Leah Perri", email: "leah@example.com" },
  //   { id: 2, name: "Luke Nilsson", email: "luke@example.com" },
  // ];

  const handleShowResume = (resume) => {
    setIsResumeShowVisible(true);
    setCurrentResume(resume);
  };

  return (
    <div>
      <h1>My Resume</h1>
      <Routes>
        <Route path="/resume/:id" element={<ResumeShow resumes={resumes} onShowResume={handleShowResume} />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
