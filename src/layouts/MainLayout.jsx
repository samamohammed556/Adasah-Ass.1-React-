import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import ScrollToTop from "../components/layout/ScrollToTop.jsx";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-text">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
