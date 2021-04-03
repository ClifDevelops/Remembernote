import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
// import "./DemoLogin.css";

function DemoLogin() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("demo@user.io");
  const [password, setPassword] = useState("password");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/homepage" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <div className="login-container">
      {/* <div className="login-title">Login</div> */}
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div className="login-div">
          <label className="login-label">
            {/* Username or Email */}
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
              placeholder="Username or Email"
              className="login-input"
              hidden="true"
            />
          </label>
        </div>
        <div className="login-div">
          <label className="login-label">
            {/* Password */}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="login-input"
              placeholder="Password"
              hidden="true"
            />
          </label>
        </div>
        <div>
          <button type="submit" className="login-button">
            Demo User?
          </button>
        </div>
      </form>
    </div>
  );
}

export default DemoLogin;
