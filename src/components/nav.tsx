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
        <Link to="/">&lt;Home&gt;</Link>
      </li>
      <li>
        <Link to="/portfolio">&lt;Portfolio&gt;</Link>
      </li>
      <li>
        <Link to="/about">&lt;About&gt;</Link>
      </li>
      <li>
        <Link to="/blog">&lt;Blog&gt;</Link>
      </li>
      <li>
        <Link to="/contact">&lt;Contact&gt;</Link>
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
