import { useFilterOptionUpdate } from "../../context/filter_context";
import { misdemeanourText } from "../../client_services/misdemeanours"
import Label from "../sharePoint/form_element/label";
import Select from "../sharePoint/form_element/select";
import './filter.css';

const Filter: React.FC = () => {
  const filterOptionUpdate = useFilterOptionUpdate();
  return (
    <div className="misdemeanours__filter">
      <Label forID="filter" labelText="Filter by misdemeanour" />
      <Select
        id="filter"
        values={misdemeanourText}
        onChangeHandler={(event) => filterOptionUpdate(event.target.value)}
      />
    </div>
  );
};

export default Filter;