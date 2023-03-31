import { ThreeCircles } from "react-loader-spinner";
import Footer from "../footer/footer";
import './loader.css';
import Navbar from "../navbar/navbar";

const LoadingTime: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="indicator">
      <ThreeCircles
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor="#ee964b"
            innerCircleColor="#f4d35e"
            middleCircleColor="#f95738"
            />
      </div>
      <Footer />
    </>
  );
};

export default LoadingTime;