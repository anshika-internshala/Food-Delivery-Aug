import React from "react";

class ProfileClassBased extends React.Component {
  constructor(props) {
    console.log("constructor");
    super();
    this.props = props;
    this.state = {
      count: 0,
      count1: 0,
    };
  }

  componentDidMount() {
    console.log("Component mounted");
  }

  componentDidUpdate() {
    console.log("component is updated");
  }

  componentWillUnmount() {
    console.log("component is unmounted");
  }

  render() {
    console.log("component is rendered");
    function handleUpdateCount() {
      this.setState({ count: this.state.count + 1 });
    }

    return (
      <>
        <h1>Profile Class based component</h1>
        <h2>{this.props.name}</h2>
        <h2>{this.state.count}</h2>
        <h2>{this.state.count1}</h2>
        <button
          className="border bg-slate-50"
          onClick={handleUpdateCount.bind(this)}
        >
          Update Count Value
        </button>
      </>
    );
  }
}

export default ProfileClassBased;
