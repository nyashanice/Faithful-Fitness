import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {

  return (
    <div className="text-center">
      <Link to="/" className="header-link">
        <img src="/images/logo.png" alt="Logo" className='header-logo' />
      </Link>
    </div>
  );
}
