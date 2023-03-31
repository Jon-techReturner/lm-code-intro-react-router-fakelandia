import React from "react";
import {
  ConfessProps,
  useConfession,
  useConfessionUpdate,
} from "../../context/confession_context";
import TextArea from "../sharePoint/form_element/textarea";

const ConfessionText: React.FC = () => {
  const confession = useConfession();
  const updateConfession = useConfessionUpdate();

  const updateConfessionText = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newConfession: ConfessProps = {
      ...confession,
      confession: event.target.value,
    };
    updateConfession(newConfession);
  };

  return (
    <div className="confessionForm__element">
      <TextArea
        id="confessionText"
        value={confession.confession}
        onChangeHandler={updateConfessionText}
      />
    </div>
  );
};

export default ConfessionText;