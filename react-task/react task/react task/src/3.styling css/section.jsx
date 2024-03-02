import React from "react";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";


export default function SectionPart() {
  return (
    <div className="w-100 text-danger bg-dark">
      <h1>Section</h1>
          <Button color="primary">Click Me</Button>
          <Card
  style={{
    width: '18rem'
  }}
>
  <img className="rounded-2"
    alt="Sample"
    src="https://picsum.photos/300/200"
  />

  <CardBody>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button className="w-100" color="danger" >
      Button
    </Button>
  </CardBody>
</Card>
    </div>
  );
}
