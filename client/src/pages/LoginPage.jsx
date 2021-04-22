import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useUserStore } from "../context/state";

const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const setAuthUser = useUserStore((state) => state.setAuthUser);
  const history = useHistory();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.email === "kwadwo@email.com" && user.password === "password") {
      setAuthUser("123456789");
      history.push("/");
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {error && <p>Email/Password invalid</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={user.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          value={user.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
