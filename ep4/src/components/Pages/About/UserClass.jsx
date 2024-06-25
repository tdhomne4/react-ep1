import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    // console.log(props);
    //create state object in class
    this.state = {
      count: 0,
      count1 : 1,
    };
    console.log(this.props.name + "child constructor");
  }

  componentDidMount(){
    console.log(this.props.name + "child componentDidmount()");
  }
  render() {
    console.log(this.props.name + "child render");

    const { name, location } = this.props;
    const { count, count1 } = this.state;
    return (
      <div>

        <h3>{count}</h3>
        <h5>{count1}</h5>
        <button onClick={() =>{
					this.setState({
						count : this.state.count + 1,
            count1 : this.state.count1 + 2
					})
				}}>cllick</button>
				<p>{name}</p>
        <p>{location}</p>
      </div>
    );
  }
}
export default UserClass;
