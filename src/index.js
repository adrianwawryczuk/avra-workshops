import React from "react";
import ReactDOM from "react-dom";
import { CompoundToggle } from "./compound-toggle/compound-component";

function App() {
  return (
    <div className="App">
      <CompoundToggle>
        <CompoundToggle.Off>"Wylaczony"</CompoundToggle.Off>
        <CompoundToggle.Switch />
        <CompoundToggle.On>"Właczony"</CompoundToggle.On>
        <Log />
      </CompoundToggle>
    </div>
  );
}

function Log({ on }) {
  console.log(on);

  return null;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
