import React, { Component } from 'react'
import { Button } from "reactstrap";


export default class Count extends Component {
    constructor() {
        super();
        this.count =0;
        this.state={
            amount: 300,
            point:0
        };
        

    }
    componentDidMount() {
        this.count2 = 999
        setTimeout(() => {
            alert("PLEASE LOGIN THIS WEBSITE")
        }, 5000);
    }
    componentDidUpdate(oldprops,oldstate) {
        // console.log("Count  componentDidUpdate  oldprops:", oldprops)
        // console.log("Count  componentDidUpdate  oldstate:", oldstate)
        if (this.state.amount - oldstate.amount === 5) {
            alert("CAN YOU GIVE INCREMENT 5 VALUES")
            this.setState({point:this.state.point+1})
        }
        
    }
  render() {
    return (
      <div className="text-black w-100 h-100 d-flex justify-content-center  ">
        <div className="text-black">
          <h2>count is {this.count} </h2>
          <h2>count2 is {this.count2}</h2>
          <h2>amount is {this.state.amount}</h2>
          <h2>point is {this.state.point}</h2>

          <Button
            className="me-5 bg-danger border-0"
            onClick={() => this.setState({ amount: this.state.amount + 1 })}
          >
            inc of Count
          </Button>
          <Button
            className="me-5 bg-danger border-0"
            onClick={() => this.setState({ amount: this.state.amount + 5 })}
          >
            inc of amount 5
          </Button>
        </div>
      </div>
    );
  }
}
