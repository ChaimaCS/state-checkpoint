import React, { Component } from "react";
import images from './images.jpg'

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      intervall: null,
      timer: 0
    };
  }

componentDidMount = () => {
    this.setState({
    intervall: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
    }, 1000)
    });
};

componentWillUnmount = () => {
    console.log("run componentWillUnmount ");
    clearInterval(this.state.intervall);
};

  render() {
    return (
        <div class="container ">
  <div class="row align-items-center">
    <div class="d-flex justify-content-center space-around">
        <div className="card " style={{width: '18rem'}}>
  <img src={images} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">Chaima SOUILAH</h5>
    <h6>Georesources and Environment Engineer</h6>
    <p className="card-text">Motivated, hardworking person with a geological and environmental diploma who is currently learning how to code</p>
  </div>
  </div>
</div>
</div>
<div class="d-flex justify-content-center">
<h1>{this.state.timer}</h1>
</div>

      </div>
    );
  }
}

export default Info;
