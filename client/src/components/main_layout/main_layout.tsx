import { Outlet } from "react-router-dom";
import Footer from "../sharePoint/footer/footer";
import Navbar from "../navbar";
import Header from "../header";
const MainLayout: React.FC = () => {
  return (
    <>
      
      <Navbar />
      <div className="content">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;