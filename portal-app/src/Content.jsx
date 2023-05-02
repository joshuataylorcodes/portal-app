import { LogoutLink } from "./LogoutLink";
import { Axios } from "axios";

export function Content() {
  const resumes = [
    { id: 1, name: "Leah Perri", email: "leah@example.com" },
    { id: 2, name: "Luke Nilsson", email: "luke@example.com" },
  ];
  return (
    <div>
      <h1>My Resume</h1>
      <ResumeShow resumes={resumes} />
    </div>
  );
}
