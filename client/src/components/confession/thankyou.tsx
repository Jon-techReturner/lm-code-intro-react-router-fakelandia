import React from "react";
import Label from "../sharePoint/form_element/label";
import { useDisabled } from "../../context/disabled_context";
import { useMisdemeanours } from "../../context/misdemeanours_context";

const Thankyou: React.FC = () => {
  const disabled: boolean = useDisabled();
  const misdemeanours = useMisdemeanours();

  return (
    <div className="confessionForm__thankyou">
      {disabled &&
        misdemeanours.filter((misdemeanour) => misdemeanour.selfConfessed)
          .length > 0 && (
          <Label
            labelID="thankyou"
            labelText="Thank you for your confession or vent"
          />
        )}
    </div>
  );
};

export default Thankyou;