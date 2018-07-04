import "./switch.css";
import React from "react";

export class Switch extends React.Component {
  render() {
    const { on, className = "", ...props } = this.props;
    const btnClassName = [
      className,
      "toggle-btn",
      on ? "toggle-btn-on" : "toggle-btn-off"
    ]
      .filter(Boolean)
      .join(" ");
    return (
      <div>
        <input className="toggle-input" type="checkbox" checked={on} />
        <button className={btnClassName} aria-label="Toggle" {...props} />
      </div>
    );
  }
}
