import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/nav.scss";

export const MobileNav = () => {
  return (
    <button className="mobile-btn">
      <i className="bx bx-menu"></i>
    </button>
  );
};

export const MainNav = () => {
  return (
    <ul className="nav-links-container">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export const Nav: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Listener for mount
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="nav-container">
      <div className="nav-img-container">
        <figure>
          <img src="../../assets/images/logo.jpg" alt="#" />
        </figure>
      </div>
      {isMobile ? <MobileNav /> : <MainNav />}
    </nav>
  );
};
