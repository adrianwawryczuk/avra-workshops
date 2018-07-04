import React from "react";
import { Switch } from "../switch/switch";

export class CompoundToggle extends React.Component {
  state = { on: false };
  toggle = () => this.setState(({ on }) => ({ on: !on }));

  render() {
    const { on } = this.state;

    return <Switch on={on} onClick={this.toggle} />;
  }
}
