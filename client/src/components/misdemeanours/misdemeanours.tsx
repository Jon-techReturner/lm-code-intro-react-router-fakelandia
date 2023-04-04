import MisdemeanourHeading from "./misdemeanours_heading";
import "./misdemeanours.css";
import MisdemeanourRows from "./mis_row";
import Filter from "./filter";
import FilterProvider from "../../context/filter_context";
import DisabledProvider from "../../context/disabled_context";

const Misdemeanours: React.FC = () => {
  return (
    <>
      <DisabledProvider>
      <div className="misdemeanours__container">
        <h2 className="pageHeading">Misdemeanours</h2>
          <FilterProvider>
            <Filter />
            <table className="table-container" width="100%" role="table" aria-label="misdemeanours">
              <thead>
                 <MisdemeanourHeading />
              </thead>
              <tbody>
                <MisdemeanourRows />
              </tbody>
            </table>
          </FilterProvider>
      </div>
      </DisabledProvider>
    </>
  );
};

export default Misdemeanours;