import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-bg p-3 text-center">
      <Link to="/disclaimer">Disclaimer</Link>
    </div>
  );
}
