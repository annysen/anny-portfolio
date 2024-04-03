import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Layout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Nav />
      <div className="min-h-[calc(100vh-350px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
