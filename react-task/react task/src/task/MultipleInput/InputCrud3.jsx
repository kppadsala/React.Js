import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

let data = {
    name:"",
  email: "",
  password: "",
  gender:""
};

export default function InputCrud3() {
  let [user, setuser] = useState(data);
  let [userArr, setUserArr] = useState([]);

  const addUser=(e)=>{
    e.preventDefault();
    setUserArr([user,...userArr]);
    setuser(data)
  };

  return (
    <div className="d-flex justify-content-center w-100 flex-column  align-items-center ">
      <h3>{user.email}</h3>
      <h3>{user.password}</h3>

      <div className="w-50  border border-2 border-black p-5 rounded-2 mt-3">
        <Form onSubmit={(e)=>addUser(e)}>
        <FormGroup>
            <Label for="exampleEmail">
              <h3>Your Name</h3>
            </Label>
            <Input
              id="exampleName"
              name="name"
              placeholder="with a placeholder"
              type="text"
              value={user.name}
              onChange={(e) => setuser({ ...user, name: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">
              <h3>Email</h3>
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="with a placeholder"
              type="email"
              value={user.email}
              onChange={(e) => setuser({ ...user, email: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">
              <h3> Password</h3>
            </Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="password placeholder"
              type="password"
              value={user.password}
              onChange={(e) => setuser({ ...user, password: e.target.value })}
            />
          </FormGroup>
         
          <FormGroup tag="fieldset">
            <legend>
              <h3> Select Gender</h3>
            </legend>
            <FormGroup check>
              <Input name="radio1" type="radio" checked={user.gender=="male"} value="male"
              onChange={(e)=>setuser({...user,gender:e.target.value})}/>
              <Label check>Male</Label>
            </FormGroup>
            <FormGroup check>
              <Input name="radio1" type="radio"  checked={user.gender=="female"} value="female"
              onChange={(e)=>setuser({...user,gender:e.target.value})}/>
              <Label check>Female</Label>
            </FormGroup>
            <FormGroup check>
              <Input name="radio1" type="radio"  checked={user.gender=="other"} value="other"
              onChange={(e)=>setuser({...user,gender:e.target.value})}/>
              <Label check>Other</Label>
            </FormGroup>
          </FormGroup>
          <Label check>
            <h3>select vehicle</h3>
          </Label>
          <FormGroup check>
            <Input type="checkbox" />
            <Label check>Cycle</Label>
          </FormGroup>
          <FormGroup check>
            <Input type="checkbox" />
            <Label check>Bike</Label>
          </FormGroup>
          <FormGroup check>
            <Input type="checkbox" />
            <Label check>Car</Label>
          </FormGroup>

          <Button className="bg-danger w-100 border-0 mt-4 ">
            <h5>SUBMIT</h5>
          </Button>
        </Form>
      </div>
      <div className="w-100 p-4">
        <Table bordered hover responsive striped className="border border-1  border-black ">
          <thead>
            <tr>
              <th>Sr.no</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Gender</th>
            </tr>
          </thead>
          {
            userArr.map((e,i)=>(
            <tr key={i}>
              <th scope="row" >{i+1}</th>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.password}</td>
              <td>{e.gender}</td>

            </tr>
            ))
          }
            
        </Table>
      </div>
    </div>
  );
}
