import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav>
        {localStorage.jwt === undefined ? (
          <ul>
            <li>
              <a href="/login" className="button">
                Login
              </a>
            </li>
            <li>
              <a href="/" className="button">
                Home Page
              </a>
            </li>
            <li>
              <p className="navmsg">
                {"                   "}
                Welcome to your Student Portal! Please Login to View your Resume{" "}
              </p>
            </li>
          </ul>
        ) : (
          <li>
            <a href="/logout" className="button">
              Logout
            </a>
          </li>
        )}
      </nav>
    </header>
  );
}
