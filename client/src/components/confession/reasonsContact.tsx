import {
    ConfessProps,
    useConfession,
    useConfessionUpdate,
  } from "../../context/confession_context";
  import { misdemeanourText } from "../../client_services/misdemeanours"
  import Label from "../sharePoint/form_element/label";
  import Select from "../sharePoint/form_element/select";
  
  const ReasonForContact: React.FC = () => {
    const confession = useConfession();
    const updateConfession = useConfessionUpdate();
  
    const updateReason = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const newConfession: ConfessProps = {
        ...confession,
        reasonForContact: event.target.value,
      };
      updateConfession(newConfession);
    };
  
    return (
      <div className="confessionForm__element">
        <Label forID="reason" labelText="Reason for Contact" />
        <Select
          id="reason"
          values={{
            select: "Select",
            ...misdemeanourText,
            all: "I just want to talk",
          }}
          onChangeHandler={updateReason}
        />
      </div>
    );
  };
  
  export default ReasonForContact;