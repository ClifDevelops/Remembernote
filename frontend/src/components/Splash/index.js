import { NavLink } from 'react-router-dom';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./Splash.css"

function Splash() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("demo@user.io");
  const [password, setPassword] = useState("password");

  if (sessionUser) return <Redirect to="/homepage" />;

  const loginDemoUser = () => {
    return dispatch(sessionActions.login({ credential, password }));
  }

    return (
      <div className="splash-container">
        <div className="splash-banner">REMEMBERNOTE</div>
        <div className="splash-subtitle">Recall your life one note at a time.</div>
        <NavLink to="/login" className="splash-link">
          Already have an account? Log In!
        </NavLink>
        <button onClick={loginDemoUser} className="demo-button">Try out as a demo user!</button>
        <NavLink to="/signup" className="splash-link">
         Want to get started? Sign up here!
        </NavLink>
        
        
      </div>
    );
}

export default Splash;