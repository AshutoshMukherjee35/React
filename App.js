import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id: "heading"}, "Hello World");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
//React.createElement => ReactElement which is a JS object => HTMLElemeent(render)
console.log(heading)

// JSX => React.createElement =>ReactElement which is a JS object => HTMLElement(render)
const jsxHeading = <h1 id="heading">Hello World from jsx</h1>;
root.render(jsxHeading);
console.log(jsxHeading)