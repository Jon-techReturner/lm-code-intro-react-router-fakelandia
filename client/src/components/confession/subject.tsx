import React from "react";
import {
  ConfessProps,
  useConfession,
  useConfessionUpdate,
} from "../../context/confession_context";
import Label from "../sharePoint/form_element/label";
import TextInput from "../sharePoint/form_element/text_input";

const Subject: React.FC = () => {
  const confession = useConfession();
  const updateConfession = useConfessionUpdate();

  const updateSubject = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newConfession: ConfessProps = {
      ...confession,
      subject: event.target.value,
    };
    updateConfession(newConfession);
  };

  return (
    <div className="confessionForm__element">
      <Label forID="subject" labelText="Subject" />
      <TextInput
        id="subject"
        value={confession.subject}
        onChangeHandler={updateSubject}
      />
    </div>
  );
};

export default Subject;