import "./misdemeanours.css";

const MisdemeanourHeading: React.FC = () => {
    return (
      <>
      
        <tr className="flex-table header" role="rowgroup">
            <th className="flex-row first" role="columnheader">Citizen ID</th>
            <th className="flex-row" role="columnheader">Date</th>
            <th className="flex-row" role="columnheader">Misdemeanour</th>
            <th className="flex-row" role="columnheader">Description</th>
            <th className="flex-row" role="columnheader">Punishment idea</th>
          </tr>
     
       
      </>
    );
  };
  
  export default MisdemeanourHeading;