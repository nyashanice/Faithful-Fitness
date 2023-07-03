import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-bg p-3 text-center mt-1">
      <Link to="/disclaimer" className="footer-link">Disclaimer</Link>
    </div>
  );
}
