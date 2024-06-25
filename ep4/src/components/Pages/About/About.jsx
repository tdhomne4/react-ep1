import React from "react";
import UserClass from "./UserClass.jsx";

class About extends React.Component {
  constructor(props ){
    super(props);
    console.log("parent constructor");
  }
  componentDidMount(){
    console.log("parent componentDidMount()");
  }
  render() {
    console.log("parent render");

    return (
      <div>
        <UserClass name={"first class"} location={"Indore"} />
        <UserClass name={"second class"} location={"Indore"} />
        <UserClass name={"third class"} location={"Indore"} />
      </div>
    );
  }
}
export default About;
