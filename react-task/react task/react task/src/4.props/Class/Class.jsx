import React, { Component } from 'react'

export default class Class extends Component {
  render() {
    return (
      <div>
        <h1>my name is {this?.props?.name } and my age is {this?.props?.age } year old...</h1>
      </div>
    )
  }
}
