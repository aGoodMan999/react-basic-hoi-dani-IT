import React from "react";

class AddUserInfor extends React.Component {
  state = {
    id: "someThing",
    name: "An",
    age: 20,
  };

  handleOnChangeName = (text) => {
    this.setState({
      name: text,
    });
  };
  handleOnChangeAge = (text) => {
    this.setState({
      age: text,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();

    this.props.addUser({
      id: Math.floor(Math.random() * 100 + 1),
      name: this.state.name,
      age: this.state.age,
    });
  };

  render() {
    return (
      <div>
        <div>
          I am {this.state.name}, I am {this.state.age}
        </div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Name: </label>
          <input
            onChange={(event) => this.handleOnChangeName(event.target.value)}
            type="text"
          />
          <label>Age: </label>
          <input
            onChange={(event) => this.handleOnChangeAge(event.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUserInfor;
