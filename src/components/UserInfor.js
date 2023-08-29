import React from "react";

class UserInfor extends React.Component{

    state = {
        name: "An",
        age : 20
      }
    
      handleOnChange = (text) =>{
        this.setState({
            name: text
        })
      }
      handleOnSubmit = (event) =>{
        event.preventDefault();
        alert("me");
      }
      
    render(){
        return(
            <div>
                <div>I am {this.state.name}, I am {this.state.age}</div>
                <form onSubmit={this.handleOnSubmit}>
                    <input onChange={(text)=>this.handleOnChange(text.target.value)} type="text"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default UserInfor