import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'

export default function Bodycard(props) {
  return (
  //   <div className='h-100 w-100 p-3 m-5 border border-2 border-primary'>
  //  <h3>it`s name is {props?.name}</h3>
    //   </div>
    <Card
  color="dark"
  inverse
  style={{
    width: '22rem',
    margin:'25px 0px'
    
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      {props.title}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
     {props.name}
    </CardText>
    <Button>
      Button
    </Button>
  </CardBody>
</Card>

    )
}
