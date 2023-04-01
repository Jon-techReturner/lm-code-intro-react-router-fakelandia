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
            color="#0d3b66"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor="#0d3b66"
            innerCircleColor="#0d3b66"
            middleCircleColor="#0d3b66"
            />
      </div>
      <Footer />
    </>
  );
};

export default LoadingTime;