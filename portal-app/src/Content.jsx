import { LogoutLink } from "./LogoutLink";
import { Axios } from "axios";
import { ResumeShow } from "./ResumeShow";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

export function Content() {
  const [resumes, setResumes] = useState([]);
  const [isResumeShowVisible, setIsResumeShowVisible] = useState(false);
  const [currentResume, setCurrentResume] = useState({});

  const handleShowResume = (resume) => {
    setIsResumeShowVisible(true);
    setCurrentResume(resume);
  };

  const resume = [
    {
      id: 1,
      first_name: "Leah ",
      last_name: "Perri",
      email: "leah@example.com",
      phone_number: "123.456.7890",
      bio: "I'm super kewl.",
      linkedin_url: "linkedin.com/leah",
      twitter_url: "twitter.com/leah",
      website: "leah.com",
      resume_url: "leahresume.googledocs.com",
      github: "github.com/leah",
      photo: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    },
  ];

  return (
    <div>
      <h1>My Resume</h1>
      <Routes>
        <Route
          path="/resume/:id"
          element={
            <ResumeShow resumes={resumes} onShowResume={handleShowResume} />
          }
        />
      </Routes>
    </div>
  );
}
