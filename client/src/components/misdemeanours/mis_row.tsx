import { useFilterOption } from "../../context/filter_context";
import { useMisdemeanours } from "../../context/misdemeanours_context";
import { misdemeanourText, MisdemeanourEntry } from "../../client_services/misdemeanours";
import "./misdemeanours.css";

const MisdemeanourRow: React.FC = () => {
  const misdemeanours: Array<MisdemeanourEntry> = useMisdemeanours();
  const filterOption: string = useFilterOption();

  let misdemeanoursToDisplay = [...misdemeanours];
  if (filterOption !== "all") {
    misdemeanoursToDisplay = misdemeanours.filter(
      (misdemeanourEntry) => misdemeanourEntry.misdemeanour === filterOption
    );
  }
  misdemeanoursToDisplay.sort((a, b) => a.citizenId - b.citizenId);

  return (
    <>
      {misdemeanoursToDisplay.map((misdemeanourEntry, index) => {
        let rowClass = "table__row";
        if (misdemeanourEntry.selfConfessed) {
          rowClass += " table__row--selfconfessed";
        }
        return (
          <tr key={index} className={rowClass + `flex-table row`} role="rowgroup">
            <td className="flex-row first" role="cell">{misdemeanourEntry.citizenId}</td>
            <td className="flex-row" role="cell">{misdemeanourEntry.date}</td>
            <td className="flex-row" role="cell">
              {misdemeanourText[misdemeanourEntry.misdemeanour]}
            </td>
            <td className="flex-row" role="cell">{misdemeanourEntry.description}</td>
            <td className="flex-row" role="cell">
              <img
                className="table__image"
                alt={`Punishment for ${misdemeanourEntry.misdemeanour}`}
                src={`https://picsum.photos/130/65?random=${misdemeanourEntry.citizenId}`}
              />
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default MisdemeanourRow;