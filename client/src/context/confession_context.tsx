import React, { useContext, useState } from "react";
import { validConfession } from "../components/confession/valid_confession";
import { useDisabledUpdate } from "./disabled_context";

export interface ConfessProps {
  subject: string;
  reasonForContact: string;
  confession: string;
}

export const defaultConfession: ConfessProps = {
  subject: "",
  reasonForContact: "select",
  confession: "",
};

const ConfessionContext =  React.createContext<ConfessProps>(defaultConfession);
const defaultFunction = (confession: ConfessProps) => {};
const ConfessionUpdateContext =
  React.createContext<(confession: ConfessProps) => void>(
    defaultFunction
  );

export function useConfession(): ConfessProps {
  return useContext(ConfessionContext);
}

export function useConfessionUpdate(): typeof defaultFunction {
  return useContext(ConfessionUpdateContext);
}

type Props = {
  children?: React.ReactNode;
};

const ConfessionProvider: React.FC<Props> = ({ children }) => {
  const [confession, setConfession] = useState<ConfessProps>(defaultConfession);
  const toggleDisabled = useDisabledUpdate();

  function updateConfession(confession: ConfessProps) {
    setConfession(confession);
    toggleDisabled(!validConfession(confession));
  }

  return (
    <ConfessionContext.Provider value={confession}>
      <ConfessionUpdateContext.Provider value={updateConfession}>
        {children}
      </ConfessionUpdateContext.Provider>
    </ConfessionContext.Provider>
  );
};

export default ConfessionProvider;