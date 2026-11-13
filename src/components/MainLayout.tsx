import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <header>Dashboard Header</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
