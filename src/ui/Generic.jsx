import { Outlet } from "react-router-dom";

function Generic() {
  return (
    <div className="col-span-2 flex h-screen w-full justify-center bg-secondary">
      <Outlet />
    </div>
  );
}

export default Generic;
