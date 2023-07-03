import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  const styles = {
    logo: {
      width: "50%",
    },
  };

  return (
    <div className="text-center">
      <Link to="/" className="header-link">
        <img src="/images/logo.png" alt="Logo" style={styles.logo} />
      </Link>
    </div>
  );
}
