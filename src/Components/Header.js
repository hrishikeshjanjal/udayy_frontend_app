import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import "../assets/Header.css";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) auth.signOut();
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://photos.angel.co/startups/i/7390127-8dfe8be5825b7e146eafb13af80ec489-medium_jpg.jpg?buster=1580805073"
          alt="Udayy"
          className="header_logo"
        />
        <Link to={!user && "/login"} style={{ textDecoration: "none" }}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_option_lineOne">
              {user ? (
                <span>Hello, {user?.email}</span>
              ) : (
                <span>Hello Guest</span>
              )}
            </span>
          </div>
        </Link>
      </Link>

      <Link to={!user && "/login"}>
        <div onClick={handleAuthentication} className="header_option">
          {/*  <span className="header_option_lineOne">
            {user ? (
              <span> Hello, {user?.email}</span>
            ) : (
              <span>Hello Guest</span>
            )}
            </span>*/}
          <span className="header_option_lineTwo">
            {user ? "Sign Out" : "Sign in"}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
