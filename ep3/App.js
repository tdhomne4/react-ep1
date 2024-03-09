import React from "react";
import  ReactDOM  from "react-dom/client";

//React Element => Object (render)=> HTML
const heading = React.createElement('h1',{id : "heading"},"React ELement");
console.log(heading);
/***************************/
//JSX is not HTML inside JAVAscript, its HTML like syntax
const jsxHeading = <h1 id="heading">JSX HEading</h1>; 
//this is not valid javascript &
// JS Engine can't undertstand
//JS engine read ECMA script ES6 language
//here it's running because of ****parcel****, its transpiled JSX code before its react to JS engine
//transpiled : convert code that browser/react can understand
//tranpilation done by Babel package 
//Babel not developed by Babel

//JST ==>(Babel transpiled) Rreact.createElement ==> React.Element(Obj) ==> HTML element(render)
console.log(jsxHeading);


//***React Component*****//
/**
 * Everything is component (button, input, slider etc)
 *Types -> Class (OLD)  && Functional (NEW)
 */
//functional Component **all below code are same**
const HeadingComponent = () => {
  return <h2>FUnctional component Heading</h2>
}
const HeadingComponent1 = () => { <h2>FUnctional component Heading</h2> }
const HeadingComponent2 = () => <h2>FUnctional component Heading</h2>

//nested jsx, need to wrap inside div or <></>(fragment)
//here we call TitleComponent inside it called Component Composition
//number is jsvsacript code insode compoenent using {}
//we call react elemennt inside component
const number = 10000;
const NestedHeadingComponent = () => {
  return <>
          <div className="container">
             <TitleComponent /> 
             <span>{number}</span> 
             <span>{console.log('console in component')}</span>
             <span>{heading}</span>
          </div>
          <h3>Nestes headinng component</h3>
          {eleWithComp}
        </>;
}

const TitleComponent = () => {
   return <p>nested Title Component innside heading component</p>
}

//React element with component inside
const eleWithComp = (
  <div>react elemennt with compoenent inside  
    {HeadingComponent2()}
    <HeadingComponent2 />
    <HeadingComponent></HeadingComponent>
  </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(NestedHeadingComponent()); /**working code */
// root.render(<NestedHeadingComponent />); //render component like this in react

//root.render(heading); //render html heading
//root.render(jsxHeading); //render jsx 
root.render(<NestedHeadingComponent />); //render component