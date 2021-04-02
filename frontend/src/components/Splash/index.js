import { NavLink } from 'react-router-dom'
import "./Splash.css"

function Splash() {
    return (
      <div className="splash-container">
        <div className="splash-banner">REMEMBERNOTE</div>
        <div className="splash-subtitle">Recall your life one note at a time.</div>
        <NavLink to="/login" className="splash-link">
          Already have an account? Log In!
        </NavLink>
        <NavLink to="/signup" className="splash-link">
          Sign Up
        </NavLink>
      </div>
    );
}

export default Splash;