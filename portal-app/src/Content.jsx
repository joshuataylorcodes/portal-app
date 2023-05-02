import { LogoutLink } from "./LogoutLink";
import { Axios } from "axios";
import { ResumeShow } from "./ResumeShow";

export function Content() {
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
      <ResumeShow resume={resume} />
    </div>
  );
}
