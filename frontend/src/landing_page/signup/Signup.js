import React from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Open a Zerodha account</h2>
        <p className="signup-subtitle">
          Modern trading platforms, transparent pricing and expert support.
        </p>

        <div className="signup-buttons">
          <button
            type="button"
            className="signup-btn"
            onClick={() => navigate("/")}
          >
            Sign up Now
          </button>
          <p className="signup-note">
            Already have an account?{" "}
            <button
              type="button"
              className="signup-link"
              onClick={() => navigate("/")}
            >
              Login
            </button>
          </p>
        </div>

        <div className="signup-image">
          <img
            src="media/images/signup.png"
            alt="Zerodha signup"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
