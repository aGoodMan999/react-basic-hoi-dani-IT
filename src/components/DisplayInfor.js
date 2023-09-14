import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";

// class DisplayInfor extends React.Component {
//   constructor(props) {
//     console.log(">>> call me constructor");
//     super(props);
//   }

//   state = {
//     isDisplay: true,
//   };

//   componentDidMount() {
//     console.log(">>> call me component did mount");
//     setTimeout(() => {
//       document.title = "An";
//     }, 3000);
//   }

//   componentDidUpdate(p1, p2) {
//     console.log(">>> call me component did update");
//     console.log(p1, "\n", p2);
//   }

//   // handleHideShow = (event) => {
//   //   this.setState({
//   //     isDisplay: !this.state.isDisplay,
//   //   });
//   // };

//   render() {
//     console.log(">>> call me render");
//     let listUser = this.props.listUser;
//     let className = "show";
//     if (!this.state.isDisplay) {
//       className = "hide";
//     }

//     return (
//       <div className="display-infor-container">
//         {true && (
//           <div className={className}>
//             {listUser.map((element) => {
//               return (
//                 <>
//                   <div className="divider"></div>
//                   <div
//                     key={element.id}
//                     className={+element.age > 19 ? "red" : "green"}
//                   >
//                     Name: {element.name}, Age {element.age}
//                   </div>
//                   <button onClick={() => this.props.deleteUser(element.id)}>
//                     x
//                   </button>
//                 </>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const listUser = props.listUser;
  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handleShowHideUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };

  console.log("render");

  useEffect(() => {
    console.log(isShowHideListUser ? "show" : "hide");
  }, [isShowHideListUser]);

  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHideUser()}></span>
      </div>
      {isShowHideListUser && (
        <div>
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
                <button onClick={() => props.deleteUser(element.id)}>x</button>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DisplayInfor;
