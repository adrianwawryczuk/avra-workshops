import React from "react";
import { RenderPropsTOggle } from "./renderprops-component";

const On = ({ on, children }) => (on ? children : null);
const Off = ({ on, children }) => (!on ? children : null);
const Switch = ({ on, toggle }) => <Switch on={on} onClick={toggle} />;

export function CompoundToggle() {
  return (
    <RenderPropsTOggle>
      {({ on, getSwtichProps }) => (
        <React.Fragment>
          <Switch {...swtichProps()} on={on} />
          <Off on={on}>"Wylaczony"</Off>
          <On on={on}>"Właczony"</On>
        </React.Fragment>
      )}
    </RenderPropsTOggle>
  );
}
