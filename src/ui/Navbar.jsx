import { NavLink } from "react-router-dom";

function Navbar({ color }) {
  return (
    <div
      className={` col-start-2 col-end-3  flex items-center justify-around pt-10  text-2xl font-bold capitalize text-${color}`}
    >
      <NavLink to="/home">
        <span className="nav">home</span>
      </NavLink>
      <NavLink to="/about">
        <span className="nav">about</span>
      </NavLink>
      <NavLink to="/portfolio">
        <span className="nav">portfolio</span>
      </NavLink>
      <NavLink to="/contact">
        <span className="nav">contact</span>
      </NavLink>
      <NavLink to="/blog">
        <span className="nav">blog</span>
      </NavLink>
    </div>
  );
}

export default Navbar;
