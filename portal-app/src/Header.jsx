import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/resume/:id">My Resume</Link> |
        {localStorage.jwt === undefined ? (
          <>
            <a href="/login"> Login </a>
          </>
        ) : (
          <a href="/logout"> Logout </a>
        )}
      </nav>
    </header>
  );
}
