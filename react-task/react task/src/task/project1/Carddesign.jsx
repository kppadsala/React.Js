import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'

export default function Carddesign(props) {
  return (
    <div>
      <Card
        style={{
          width: "20rem",
          height: "450px",
          
          border: "1px solid black",
        }}
      >
        <img
          style={{ maxHeight: "200px", borderRadius: "5px 5px 0px 0px" }}
          alt="Sample"
          src={props?.data?.thumbnail}
        />
        <CardBody
          style={{
            backgroundColor: "#F3E5F5",
            borderRadius:'0px 0px 5px 5px'
          }}
        >
          <CardTitle tag="h5">{props?.data?.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            $ {props?.data?.price}.00
          </CardSubtitle>
          <CardText>{props?.data?.description}</CardText>
          <Button
            style={{
              width: "100%",
              backgroundColor: "#E040FB",
              border: "0px",
              fontWeight: "600",
            }}
          >
            Buy Now
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
