import React, { useState } from "react";
import "./App.css";
import logo from "./logo/logo.png";
import { Link } from "react-router-dom";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
      <div className="App">
        <div className="split-screen">
          {/* Sol taraftaki renkli alan */}
          <div className="left-side"></div>
          {/* Sağ taraftaki login formu */}
          <div className="right-side">
            <div className="container">
              <div className="header">
                <img src={logo} alt="Logo" className="logo" />
                <h2>Sign in</h2>
              </div>
              <div className="h3">
                <p>Sign in with your email address</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="form-password">
                    <a href="#">Forgot your password?</a>
                  </div>
                </div>
                <div>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
                <div className="or">OR</div>
              </form>
              <div className="footer">
                <p>
                  Don't have an account? <Link>Sign up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  );
}

export default App;
