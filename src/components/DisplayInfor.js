import React from "react";
import "./DisplayInfor.scss";

class DisplayInfor extends React.Component {
  constructor(props) {
    console.log(">>> call me constructor");
    super(props);
  }

  state = {
    isDisplay: true,
  };

  componentDidMount() {
    console.log(">>> call me component did mount");
    setTimeout(() => {
      document.title = "An";
    }, 3000);
  }

  componentDidUpdate(p1, p2) {
    console.log(">>> call me component did update");
    console.log(p1, "\n", p2);
  }

  handleHideShow = (event) => {
    this.setState({
      isDisplay: !this.state.isDisplay,
    });
  };

  render() {
    console.log(">>> call me render");
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
