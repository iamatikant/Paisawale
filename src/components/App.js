import Signup from "./Signup";
import React, {Component} from "react";
import Header from "./Header";

class App extends Component {

  render() {
    return(
      <div>
        <Header/>
        <Signup/>
      </div>
    );
  }
}

export default App;