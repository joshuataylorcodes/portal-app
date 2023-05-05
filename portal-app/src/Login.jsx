import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        localStorage.setItem("student_id", response.data.student_id);
        const id = localStorage.getItem("student_id");
        event.target.reset();
        window.location.href = `/students/${id}`;
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["invalid email or password"]);
      });
  };

  return (
    <div id="login">
      <div id="transbox">
        <h1>Login</h1>
      </div>
      <div id="login-container">
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div>
              Email: <input name="email" type="email" />
            </div>
            <div>
              Password: <input name="password" type="password" />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
