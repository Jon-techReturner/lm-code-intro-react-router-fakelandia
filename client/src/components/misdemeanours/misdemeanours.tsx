import MisdemeanourHeading from "./misdemeanours_heading";
import "./misdemeanours.css";
import MisdemeanourRows from "./mis_row";
import Filter from "./filter";
import FilterProvider from "../../context/filter_context";

const Misdemeanours: React.FC = () => {
  return (
    <>
      <div className="misdemeanours__container">
        <h2 className="pageHeading">Misdemeanours</h2>
          <FilterProvider>
            <Filter />
            <table className="table">
              <tbody>
                <MisdemeanourHeading />
                <MisdemeanourRows />
              </tbody>
            </table>
          </FilterProvider>
      </div>
    </>
  );
};

export default Misdemeanours;