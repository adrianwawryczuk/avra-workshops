import React from "react";
import { Switch } from "../switch/switch";

export class CompoundToggleImpl extends React.Component {
  state = { on: false };

  toggle = () => this.setState(({ on }) => ({ on: !on }));

  render() {
    const { on } = this.state;
    const { toggle } = this;

    return this.props.children({ on, toggle });
  }
}
