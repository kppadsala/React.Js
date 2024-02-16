import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function InputCrud() {
  let [user, setuser] = useState({
    
  })
  return (
    <div className="w-100">
      <div className="d-flex justify-content-center  border-2 border border-black py-4 m-auto w-50 rounded shadow my-4">
        <Form className="w-50 p-0">
          <FormGroup>
            <h5>Email</h5>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Enter Your Email"
              type="email"
            />
          </FormGroup>
          <FormGroup>
            <h5>password</h5>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Enter Your Password"
              type="password"
            />
          </FormGroup>

          <FormGroup tag="fieldset">
            <h5>Select Your Gender</h5>

            <FormGroup check>
              <Input name="radio1" type="radio" /> <Label check>Male</Label>
            </FormGroup>
            <FormGroup check>
              <Input name="radio1" type="radio" /> <Label check>Female</Label>
            </FormGroup>
            <FormGroup check>
              <Input name="radio1" type="radio" />
              <Label check>Other</Label>
            </FormGroup>
          </FormGroup>
          <h5>Select Your Hobbies</h5>
          <FormGroup check>
            <Input type="checkbox" /> <Label check>Reading</Label>
          </FormGroup>
          <FormGroup check>
            <Input type="checkbox" /> <Label check>Traveling</Label>
          </FormGroup>
          <FormGroup check>
            <Input type="checkbox" /> <Label check>Photography</Label>
          </FormGroup>
          <FormGroup check>
            <Input type="checkbox" /> <Label check>Cycling</Label>
          </FormGroup>
          <FormGroup check>
            <Input type="checkbox" /> <Label check>Sports & Fitness</Label>
          </FormGroup>
          <Button className="w-100 bg-danger border-0 mt-4">Submit</Button>
        </Form>
      </div>
      <div className="p-4">
        <Table
          bordered
          hover
          responsive
          size=""
          striped
          className="border-1 border border-dark"
        >
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
