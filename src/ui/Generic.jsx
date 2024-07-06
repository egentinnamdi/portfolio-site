import { Outlet } from "react-router-dom";

function Generic() {
  return (
    <div
      id="about"
      className="col-span-2 flex h-screen w-full justify-center bg-secondary"
    >
      <Outlet />
    </div>
  );
}

export default Generic;
