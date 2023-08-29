import logo from './logo.svg';
import './App.scss';

import MyClass from './components/MyComponents';
import React from 'react';

class App extends React.Component{
  
  state = {
    name: "An",
    age : 20
  }

  handle(event) {
    this.setState({
      age: event.screenX
    })
  }

  render(){
    return(
      <div>Hello World
        <div>I am {this.state.name}, I am {this.state.age}</div>
            <button onClick={(event) => {this.handle(event)}}>Click me</button>
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello World
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }





