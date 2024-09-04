import React from "react";
import UserClass from "./UserClass.jsx";
import UserContext from "../../../utils/UserContext";
class About extends React.Component {
  constructor(props ){
    super(props);
    console.log("parent constructor");
    this.state = {
      userData : []
    }
  }
 async componentDidMount(){
    console.log("parent componentDidMount()");
    let getUsersData = await fetch("https://jsonplaceholder.typicode.com/users");
    getUsersData = await getUsersData.json();
    this.setState({ userData: getUsersData });
    console.log(getUsersData);
  }
  render() {
    console.log("parent render");

    return (
      <div>
        <UserClass 
            name={"About Us"} 
            usersInfo={
              <>
                <UserContext.Consumer>
                  {({loggedInUser}) => (loggedInUser) }
                </UserContext.Consumer>
                { "Information"} 
              </>
            }
            userData={this.state.userData} />
      </div>
    );
  }
}
export default About;
