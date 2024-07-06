import { NavLink } from "react-router-dom";

function Navbar({ color }) {
  return (
    <div
      className={` col-start-2 col-end-3  flex items-center justify-around pt-10  text-2xl font-bold capitalize text-${color} w-full`}
    >
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
  );
}

export default Navbar;
