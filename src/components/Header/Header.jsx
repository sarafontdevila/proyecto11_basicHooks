import { useState } from "react";
import "./Header.css";

const Header = ({ h, w, bgColor, flexDir, r }) => {

  const [where, setWhere] = useState("Home");


  const changePath = (newPath) => {
  
    setWhere(newPath);
   
  };

  return (
    <header style={{
        width: w,
        height: h,
        background: bgColor,
        position: r === 0 ? "absolute" : "relative",
        right: r
      }}
    >
      {}
      <nav style={{ height: h }}>
        <ul style={{ flexDirection: flexDir, height: h }}>
          <li>
            <a
              href="#"
              onClick={() => changePath("Home")}
              className={where === "Home" ? "active" : "disable"}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => changePath("About")}
              className={where === "About" ? "active" : "disable"}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => changePath("Contact")}
              className={where === "Contact" ? "active" : "disable"}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;