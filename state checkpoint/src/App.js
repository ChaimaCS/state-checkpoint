import React from "react";
import "./App.css";
import Info from "./components/Info";

class App extends React.Component {
  state = {
    isVisible: false
  };

  toggleShow = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div className="App">
        <h1 className="profile">Profile</h1>
        <button className='btn btn-outline-primary' onClick={this.toggleShow} >
          {this.state.isVisible ? "Hide profile" : "Show profile"}
        </button>
        {this.state.isVisible && <Info />}
      </div>
    );
  }
}

export default App;
