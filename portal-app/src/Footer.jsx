import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Footer() {
  return (
    <div className="footer">
      <a href="/"> Home |</a>
      <a href="/login"> Login |</a>
      <a href="#"> Logout</a>
    </div>
  );
}
