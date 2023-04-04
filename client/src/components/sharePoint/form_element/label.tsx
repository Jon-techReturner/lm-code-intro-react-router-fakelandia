interface LabelProps {
    labelID: string;
    labelText: string;
  }
  
  const Label: React.FC<LabelProps> = ({ labelID, labelText }) => (
    <label className="form__text label" htmlFor={labelID}>
      {labelText}
    </label>
  );
  
  export default Label;