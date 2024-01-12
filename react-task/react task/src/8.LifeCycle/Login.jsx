import React, { Component } from 'react'
import { Button } from 'reactstrap'

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
        id: "",
      lid:""
    };
  }
    componentDidMount() {
        
        let id = setInterval(() => {
        
      alert("CAN YOU PLEASE LOGIN ");
        }, 8000);
        this.setState({ id: id });
        
        let lid = setInterval(() => {
          alert(" ********?LOGIN?****** ");
        }, 5000);
      this.setState({ lid: lid });
        
      
  }
    componentDidUpdate(oldprops, oldstate) {
        if (this.state.id < this.state.lid) {
            if (this.state.count - oldstate.count === 5) {
                // alert("CAN DO YOU INCRESE 5POINT");
                clearInterval(this.state.lid);
            } else {
                 if (this.state.count - oldstate.count === 1) {
                   // alert("CAN DO YOU INCRESE 5POINT");
                   clearInterval(this.state.id);
                 }
            }
        }
        else {
            if (this.state.count - oldstate.count === 1) {
                // alert("CAN DO YOU INCRESE 5POINT");
                clearInterval(this.state.id);
            } else {
                 if (this.state.count - oldstate.count === 5) {
                   // alert("CAN DO YOU INCRESE 5POINT");
                   clearInterval(this.state.lid);
                 }
            }
        }
    }
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center ">
        <div className="text-black">
          <h1>Count is ={this.state.count} </h1>
          <Button
            className="me-4 bg-primary border-0"
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Inc +1
          </Button>
          <Button
            className="bg-primary border-0"
            onClick={() => this.setState({ count: this.state.count + 5 })}
          >
            Inc +5
          </Button>
        </div>
      </div>
    );
  }
}
