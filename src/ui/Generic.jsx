import { Outlet } from "react-router-dom";

function Generic() {
  return (
    <div
      id="about"
      className="bg-secondary w-screen 2xl:flex 2xl:h-screen 2xl:justify-center"
    >
      <Outlet />
    </div>
  );
}

export default Generic;
