import React from "react";
import "./UserData.scss"
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    // console.log(props);
    //create state object in class
    console.log(this.props.userData);
    console.log(this.props.name + "child constructor");
    // this.timer = setInterval(() => {
    //   console.log("TIme interval ");
    // },1000)
  }

  componentDidMount(){
    console.log(this.props.name + "child componentDidmount()");
  }
  componentWillUnmount(){
   // clearInterval(this.timer);
  }
  render() {
    console.log(this.props.name + "child render");

    const { name, location } = this.props;
    return (
      <div>
				<p>{name}</p>
        <p>{location}</p>
        {this.props.userData.map(user => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
      </div>
    );
  }
}
export default UserClass;
