import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="main-layout-wrapper">
      <Outlet />
    </div>
  );
};
