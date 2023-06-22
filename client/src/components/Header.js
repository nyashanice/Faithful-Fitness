import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  return (
    <div>
      <Link to="/" className="header-link">
        <div className="text-center m-3">Faithful Fitness</div>
      </Link>
    </div>
  );
}
