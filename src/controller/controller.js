import React from "react";
import ReactDOM from "react-dom";

const Controller = () => {
  return <div>Controller</div>;
};

// Get the root element
const root = document.querySelector("#controller-root");
// Render React tree into root element
ReactDOM.render(React.createElement(Controller), root);
