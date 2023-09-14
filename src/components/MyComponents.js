import React, { useState } from "react";

import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

// class MyClass extends React.Component {
//   state = {
//     listUser: [
//       { id: "0", name: "an", age: 19 },
//       { id: "1", name: "truc", age: 20 },
//     ],
//   };

//   addUser = (user) => {
//     //Cách truyền thống (ko khuyến khích)
//     // let newListUser = this.state.listUser;
//     // newListUser.unshift(user);

//     // this.setState({
//     //   listUser: newListUser
//     // });

//     //Cách hiện đại (khuyến khích)
//     console.log(user);
//     this.setState({
//       listUser: [user, ...this.state.listUser], //"..." là toán tử copy toàn bộ giá trị của mảng
//     });
//   };

//   deleteUser = (id) => {
//     console.log("delete");
//     let tempList = this.state.listUser.filter((user) => user.id !== id);
//     this.setState({
//       listUser: tempList,
//     });
//   };

//   render() {
//     return (
//       <>
//         <AddUserInfor addUser={this.addUser}></AddUserInfor>
//         <DisplayInfor
//           listUser={this.state.listUser}
//           deleteUser={this.deleteUser}
//         ></DisplayInfor>
//       </>
//     );
//   }
// }

const MyClass = () => {
  const [listUser, setListUser] = useState([
    { id: "0", name: "an", age: 19 },
    { id: "1", name: "truc", age: 20 },
  ]);

  const addUser = (newUser) => {
    setListUser([...listUser, newUser]);
  };

  const deleteUser = (id) => {
    const tempList = listUser.filter((user) => (user.id === id ? false : true));
    setListUser(tempList);
  };

  return (
    <>
      <AddUserInfor addUser={addUser}></AddUserInfor>
      <DisplayInfor listUser={listUser} deleteUser={deleteUser}></DisplayInfor>
    </>
  );
};

export default MyClass;
