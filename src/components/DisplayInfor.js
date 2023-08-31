import React from "react";

class DisplayInfor extends React.Component {
  state = {
    isDisplay: true,
  };

  handleHideShow = (event) => {
    this.setState({
      isDisplay: !this.state.isDisplay,
    });
  };

  render() {
    let listUser = this.props.listUser;
    let className = "show";
    if (!this.state.isDisplay) {
      className = "hide";
    }
    return (
      <div>
        <div
          onClick={(event) => {
            this.handleHideShow(event);
          }}
        >
          {this.state.isDisplay === true ? "Hide" : "Show"}
        </div>
        {this.state.isDisplay && (
          <div className={className}>
            {listUser.map((element) => {
              return (
                <div
                  key={element.name}
                  className={+element.age > 19 ? "red" : "green"}
                >
                  Name: {element.name}, Age {element.age}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
