import { Outlet } from "react-router-dom";

function Generic() {
  return (
    <div
      id="about"
      className="flex h-screen w-full bg-secondaryLight 2xl:col-span-2 2xl:justify-center 2xl:bg-secondary"
    >
      <Outlet />
    </div>
  );
}

export default Generic;
