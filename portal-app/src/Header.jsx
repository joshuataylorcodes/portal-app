import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav>
        {localStorage.jwt === undefined ? (
          <>
            <a href="/login"> Login </a> |<a href="/"> Home Page </a>
          </>
        ) : (
          <a href="/logout"> Logout </a>
        )}
      </nav>
    </header>
  );
}
