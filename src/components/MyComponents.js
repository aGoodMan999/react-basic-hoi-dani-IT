import React from "react";

import UserInfor from "./UserInfor";
import DisplayInfor from './DisplayInfor'

class MyClass extends React.Component{

    state={

        listUser: [
            {name: "an", age: 19},
            {name: "truc", age: 20}
        ]
    }

    render(){
        
        return (
            <div>
                <UserInfor></UserInfor>
                <DisplayInfor listUser={this.state.listUser}></DisplayInfor>
            </div>
        );
    }
}

export default MyClass;