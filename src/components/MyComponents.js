import React from "react";

import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

class MyClass extends React.Component {
  state = {
    listUser: [
      { name: "an", age: 19 },
      { name: "truc", age: 20 },
    ],
  };

  addUser = (user) => {
    //Cách truyền thống (ko khuyến khích)
    // let newListUser = this.state.listUser;
    // newListUser.unshift(user);

    // this.setState({
    //   listUser: newListUser
    // });

    //Cách hiện đại (khuyến khích)
    this.setState({
      listUser: [user, ...this.state.listUser], //"..." là toán tử copy toàn bộ giá trị của mảng
    });
  };

  render() {
    return (
      <div>
        <AddUserInfor addUser={this.addUser}></AddUserInfor>
        <DisplayInfor listUser={this.state.listUser}></DisplayInfor>
      </div>
    );
  }
}

export default MyClass;
