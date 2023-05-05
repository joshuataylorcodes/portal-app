import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    localStorage.removeItem("student_id");
    window.location.href = "/login";
  };

  return (
    <div className="logout">
      <h2>Are you sure you would like to Log Out</h2>
      <button onClick={handleClick}>Yes</button>;
    </div>
  );
}
