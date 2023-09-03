import React from "react";
import "./DisplayInfor.scss";

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
      <div className="display-infor-container">
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
                <>
                  <div className="divider"></div>
                  <div
                    key={element.id}
                    className={+element.age > 19 ? "red" : "green"}
                  >
                    Name: {element.name}, Age {element.age}
                  </div>
                  <button onClick={() => this.props.deleteUser(element.id)}>
                    x
                  </button>
                </>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
