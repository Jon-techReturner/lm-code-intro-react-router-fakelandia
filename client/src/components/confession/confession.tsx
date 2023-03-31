import React from "react";
import ConfessionProvider from "../../context/confession_context";
import DisabledProvider from "../../context/disabled_context";
import ConfessionForm from "./confessionForm";
import './confession.css';

const Confession: React.FC = () => {
  return (
    <>
      <div className="confession__container">
          <h2 className="confession__title">Confession</h2>
          <div className="confession__text">
            It's very difficult to catch people committing misdemeanours so we
            appreciate it when citizens confess to us directly.
          </div>
          <div className="confession__text">
            However, if you're just having a hard day and need to vent then you're
            welcome to contact us here too. Up to you!
          </div>
      </div>
          <DisabledProvider>
            <ConfessionProvider>
              <ConfessionForm />
            </ConfessionProvider>
          </DisabledProvider>

    </>
  );
};

export default Confession;