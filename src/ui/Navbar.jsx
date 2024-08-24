import { NavLink } from "react-router-dom";
import "lazysizes";

function Navbar() {
  return (
    <div
      className={`h-28 font-bold capitalize text-white 2xl:flex 2xl:w-screen 2xl:items-center 2xl:justify-around 2xl:text-2xl`}
    >
      <div className="2xl:mt-14 2xl:flex 2xl:h-36 2xl:w-1/4 2xl:justify-center">
        <img
          data-src="/logo2.png"
          data-sizes="auto"
          alt="logo"
          className="lazyload h-full min-w-20"
        />
      </div>
      <div className="2xl:flex 2xl:w-2/4 2xl:justify-around">
        <NavLink to="/home">
          <span className="nav">home</span>
        </NavLink>
        <a href="#about">
          <span className="nav">about</span>
        </a>
        <a href="#portfolio">
          <span className="nav">portfolio</span>
        </a>
        <a href="#contact">
          <span className="nav">contact</span>
        </a>
        <a href="#blog">
          <span className="nav">blog</span>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
