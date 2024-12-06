import React, { useEffect, useState } from "react";
import "../styles/nav.scss";

export const MobileNav = () => {
  return (
      <ul className="mobile-links-container">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
  );
};

export const MainNav = () => {
  return (
    <ul className="nav-links-container">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Portfolio</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Blog</a>
      </li>
      <li>
        <a href="#">Contact</a>
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
