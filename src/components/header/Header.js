import React, { useState } from "react";
import { Link } from "react-router-dom";
import Netflix_Logo from "../../images/Logonetflix.png";
import { AiOutlineSearch } from "react-icons/ai";
import { ImMenu3 } from "react-icons/im";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  function reloadFunction() {
    window.location.reload(true);
  }

  return (
    <nav className="header">
      <img src={Netflix_Logo} alt={Netflix_Logo} />

      <div className="desktop_nav">
        <Link onClick={reloadFunction} to="/netflix">
          TV Shows
        </Link>
        <Link onClick={reloadFunction} to="/netflix">
          Movies
        </Link>
        <Link onClick={reloadFunction} to="/netflix">
          Recently Added
        </Link>
        <Link onClick={reloadFunction} to="/netflix">
          My List
        </Link>
      </div>

      <AiOutlineSearch className="desktop_search" />
      <ImMenu3 className="open_icon" onClick={() => setOpenNav(!openNav)} />
      <div className="mobile_nav" style={{ width: openNav ? "240px" : "0" }}>
        <GrClose
          style={{ display: openNav ? "" : "none" }}
          className="close_icon"
          onClick={() => setOpenNav(!openNav)}
        />
        <Link onClick={reloadFunction} to="/netflix">
          TV Shows
        </Link>
        <Link onClick={reloadFunction} to="/netflix">
          Movies
        </Link>
        <Link onClick={reloadFunction} to="/netflix">
          Recently Added
        </Link>
        <Link onClick={reloadFunction} to="/netflix">
          My List
        </Link>
      </div>
    </nav>
  );
};

export default Header;
