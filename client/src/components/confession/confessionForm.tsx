import React from "react";
import {
  defaultConfession,
  ConfessProps,
  useConfession,
  useConfessionUpdate,
} from "../../context/confession_context";
import { useMisdemeanoursUpdate } from "../../context/misdemeanours_context";
import { Misdemeanour, MisdemeanourEntry } from "../../client_services/misdemeanours"
import ConfessionText from "./confession_text";
import ConfessButton from "./confess_button";
import ReasonForContact from "./reasonsContact";
import Subject from "./subject";
import Thankyou from "./thankyou";
import './confessionForm.css';

const ConfessionForm: React.FC = () => {
  const newConfession: ConfessProps = useConfession();
  const updateConfession = useConfessionUpdate();
  const updateMisdemeanours = useMisdemeanoursUpdate();

  const getCitizenId = (): number => {
    const rand = (x: number): number => Math.random() * x;
    return Math.floor(42 + rand(37) * rand(967));
  };

  const saveConfession = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // if confessor needs to talk, log confession text to console
    if (newConfession.reasonForContact === "all") {
      console.log(
        `A citizen has just vented the following: ${newConfession.subject} - ${newConfession.confession}`
      );
    }
    // otherwise, add confession to list of misdemeanours
    else {
      const misdemeanourEntry: MisdemeanourEntry = {
        citizenId: getCitizenId(),
        date: new Date().toLocaleDateString(),
        misdemeanour: newConfession.reasonForContact as Misdemeanour,
        description: newConfession.confession,
        selfConfessed: true,
      };
      updateMisdemeanours(misdemeanourEntry);
    }
    updateConfession(defaultConfession);
  };

  return (
    <div className="confession__container">
      <form className="confessionForm" onSubmit={saveConfession}>
        <Subject />
        <ReasonForContact />
        <ConfessionText />
        <ConfessButton />
        <Thankyou />
      </form>
    </div>
  );
};

export default ConfessionForm;