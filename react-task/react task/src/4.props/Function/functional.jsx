import React from 'react'

export default function Functional(props) {
  return (
      <div>
          <h1>my name is{props?.name} my age is { props?.age || "not mention"}</h1>
    </div>
  )
}
