import React from "react";
import "./UserData.scss";
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

  componentDidMount() {
    console.log(this.props.name + "child componentDidmount()");
  }
  componentWillUnmount() {
    // clearInterval(this.timer);
  }
  render() {
    console.log(this.props.name + "child render");

    const { name, usersInfo } = this.props;
    return (
      <div class="container">
        <h1>{name}</h1>
        <h3>{usersInfo}</h3>
        <div class="users">
          {this.props.userData.map((user) => (
            <div class="user-card">
              <h2>{user.name}</h2>
              <p>
                <strong>Username:</strong> {user.username}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <div class="address">
                <h3>Address</h3>
                <p>
                  <strong>Street:</strong>
                  {user.address.street}
                </p>
                <p>
                  <strong>Suite:</strong>
                  {user.address.suite}
                </p>
                <p>
                  <strong>City:</strong> {user.address.city}
                </p>
                <p>
                  <strong>Zipcode:</strong> {user.address.zipcode}
                </p>
                <p>
                  <strong>Geo:</strong> Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
                </p>
              </div>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p>
                <strong>Website:</strong> {user.website}
              </p>
              <div class="company">
                <h3>Company</h3>
                <p>
                  <strong>Name:</strong> {user.company.name}
                </p>
                <p>
                  <strong>Catch Phrase:</strong> {user.company.catchPhrase}
                </p>
                <p>
                  <strong>BS:</strong> {user.company.bs}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default UserClass;
