import React from "react";
import  ReactDOM  from "react-dom/client";

/* create nested elements
 *<div class="parent">
 *	<div class="child">
 *		<h1>Hello from React!!!!!!!!!!!!!!!</h1>
 *		<h2>Sub heading from React!!!!!!!!!!!!!!!</h2>
 *		<div class="nes-sec"><p>Sub heading sub heading from R!!!!!!</p>
 *	</div>
 * *	<div class="child2">
 *		<h3>Hello from React!!!!!!!!!!!!!!!</h3>
 *		<h4>Sub heading from React!!!!!!!!!!!!!!!</h4>
 *		<div class="nes-sec"><p>Sub heading sub heading from R!!!!!!</p>
 *</div>
 *</div>
 *
 *
 */
const parent = React.createElement("div", { className: "parent" }, [
  React.createElement("div", { className: "child" }, [
    React.createElement(
      "h1",
      { id: "custom-heading", className: "cus-h" },
      "Hello From React"
    ),
    React.createElement(
      "h2",
      { className: "sub-h" },
      "Sub heading from R!!!!!!!!!!!!!!!"
    ),
    React.createElement(
      "div",
      { className: "nes-sec" },
      React.createElement(
        "p",
        {},
        "Sub heading sub heading from R!!!!!!!!!!!!!!!"
      )
    ),
  ]),
  React.createElement("div", { className: "child1" }, [
    React.createElement(
      "h3",
      { id: "custom-heading1", className: "cus-h" },
      "Hello From R11!!!!!!!"
    ),
    React.createElement(
      "h4",
      { className: "sub-h" },
      "Sub heading from R111!!!!!!!!!!!!!!!"
    ),
    React.createElement(
      "div",
      { className: "nes-sec" },
      React.createElement(
        "p",
        {},
        "Sub heading sub heading from R!!!!!!!!!!!!!!!"
      )
    ),
  ]),
]);
// const heading = React.createElement(
//   "h1",
//   { id: "custom-heading", className: "c-heading" },
//   "Hello from react!!!!!!!!!!!!"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
