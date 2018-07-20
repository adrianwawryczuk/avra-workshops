import React from "react";
import { RenderPropsTOggle } from "./renderprops-component";

const Context = React.createContext("value");

class CompoundToggle {
  state = {
    value: "someOtherValue"
  };

  render() {
    return (
      <RenderPropsTOggle>
        <Context.Provider value={this.state.value}>
          <Context.Consumer>{value => value}</Context.Consumer>
        </Context.Provider>
      </RenderPropsTOggle>
    );
  }
}
