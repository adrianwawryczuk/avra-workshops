import React from "react";
import { Switch } from "../switch/switch";

export class CompoundToggle extends React.Component {
  state = { on: false };
  toggle = () => this.setState(({ on }) => ({ on: !on }));

  static On = ({ on, children }) => (on ? children : null);
  static Off = ({ on, children }) => (!on ? children : null);
  static Switch = ({ on, toggle }) => <Switch on={on} onClick={toggle} />;

  render() {
    const { on } = this.state;
    const { toggle } = this;

    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, { on, toggle });
    });
  }
}
