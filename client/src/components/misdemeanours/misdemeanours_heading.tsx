import './misdemeanours_heading.css';

const MisdemeanourHeading: React.FC = () => {
    return (
      <>
        <tr className="table__row">
          <th className="table__cell">Citizen ID</th>
          <th className="table__cell">Date</th>
          <th className="table__cell">Misdemeanour</th>
          <th className="table__cell">Description</th>
          <th className="table__cell">Punishment idea</th>
        </tr>
      </>
    );
  };
  
  export default MisdemeanourHeading;