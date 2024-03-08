import React, { Component } from 'react'
import Class from './Class'

export default class ClassProps extends Component {
  render() {
    return (
        <div>
        <Class name={"krunal"} age={23} />
        <hr />
        <Class name={"vivek"} age={27} />
        <hr />
        <Class name={"nirmal"} age={25} />
        <hr />
        <Class name={"jay"} age={33} />
        <hr />
        
      </div>

    )
  }
}
