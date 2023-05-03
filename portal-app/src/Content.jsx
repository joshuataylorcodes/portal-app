import { LogoutLink } from "./LogoutLink";
import { Axios } from "axios";
import { ResumeShow } from "./ResumeShow";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Login } from "./Login";

export function Content() {
  // const [resume, setResume] = useState([]);
  const [currentResume, setCurrentResume] = useState({});

  const resume = {
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
  };

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ResumeShow resume={resume} />} />
      </Routes>
    </div>
  );
}
