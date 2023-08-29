import React from "react";


class MyClass extends React.Component{

     handleClick= (a)=> {
     console.log(a);   
    }
    render(){
        
        return (
            <div>my fisrt Component
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}

export default MyClass;