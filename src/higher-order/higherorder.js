import React from "react";
import { Switch } from "../switch/switch";

function WithSomething(Component) {
  return <Component something={"value"} />;
}
