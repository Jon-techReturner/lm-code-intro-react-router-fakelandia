// import { useMisdemeanours } from "../../context/misdemeanours_context";
const Home: React.FC = () => {
//   const misdemeanours = useMisdemeanours();

  return (
    <>
            
            <h2 className="sub__header">Statistics</h2>
            <div className="sub__text">
              {/* Number of misdemeanours currently reported:  <strong>{misdemeanours.length}</strong> */}
            </div>
            <div className="pageText">
              Of these,{" "}
              {/* {
                misdemeanours.filter((misdemeanour) => misdemeanour.selfConfessed)
                  .length
              }{" "} */}
              are self-confessed misdemeanours
            </div>
    </>
  );
};

export default Home;