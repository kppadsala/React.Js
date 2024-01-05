import React, { Component } from 'react'
import { Button } from 'reactstrap';

export default class ClassState extends Component {
    constructor() {
        super();
        this.state = {
          count: 10,
          amount:100
        };
    }
    intCount() {
        this.setState({count:this?.state?.count+1})
    }
  render() {
    return (
      <div>
        <h1>Count is {this?.state?.count}</h1>
        <Button color="danger" onClick={() => this?.intCount()}>
          Count
        </Button>
        <hr />
        <h1>Count is {this?.state?.amount}</h1>
        <Button
          color="danger"
          onClick={() => this?.setState({ amount: this?.state?.amount + 1 })}
        >
          amount
        </Button>
      </div>
    );
  }
}
