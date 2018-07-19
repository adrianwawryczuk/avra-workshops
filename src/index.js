import React from "react";
import ReactDOM from "react-dom";
import { CompoundToggle } from "./compound-toggle";

function App() {
  return (
    <div className="App">
        <CompoundToggle />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
