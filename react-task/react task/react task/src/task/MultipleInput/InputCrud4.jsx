import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

let data = {
  email: "",
  password: "",
  gender: "",
  hobbies: "",
};
export default function InputCrud4() {
  let [user, setuser] = useState(data);
  let [userArr, setuserArr] = useState([]);

  const addUser = (e) => {
    e.preventDefault();
    setuserArr([user, ...userArr]);
    setuser(data);
  };

  return (
    <div className="w-100 d-flex justify-content-center mt-5 flex-column align-items-center ">
           <div className=" border shadow border-dark border-2 p-5 w-50">
        <Form onSubmit={(e) => addUser(e)}>
          <FormGroup>
            <Label for="exampleEmail">
              <h4> Email</h4>
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Enter Your Email"
              type="email"
              value={user.email}
              onChange={(e) => setuser({ ...user, email: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">
              <h4> Password</h4>
            </Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Enter Your Password"
              type="password"
              value={user.password}
              onChange={(e) => setuser({ ...user, password: e.target.value })}
            />
          </FormGroup>

          <FormGroup tag="fieldset">
            <legend>
              <h4>Select Gender</h4>
            </legend>
            <FormGroup check>
              <Input
                name="gender"
                type="radio"
                value="male"
                checked={user.gender=='male'}
                onChange={(e) => setuser({ ...user, gender: e.target.value })}
              />
              <Label check>Male</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                name="gender"
                type="radio"
                value="female"
                checked={user.gender=='female'}

                onChange={(e) => setuser({ ...user, gender: e.target.value })}
              />
              <Label check>Female</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                name="gender"
                type="radio"
                value="other"
                checked={user.gender=='other'}
                onChange={(e) => setuser({ ...user, gender: e.target.value })}
              />
              <Label check>Other</Label>
            </FormGroup>
          </FormGroup>
          <h5>Select Your Hobbies</h5>
          <FormGroup check>
            <Input
              type="checkbox"
              name="hobbies"
              value="traveling"
              onChange={(e) => setuser({ ...user, hobbies: e.target.value })}
            />
            <Label check>Traveling</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              name="hobbies"
              value="reading"
              onChange={(e) => setuser({ ...user, hobbies: e.target.value })}
            />
            <Label check>Reading</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              name="hobbies"
              value="singing"
              onChange={(e) => setuser({ ...user, hobbies: e.target.value })}
            />
            <Label check>Singing</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              name="hobbies"
              value="swim"
              onChange={(e) => setuser({ ...user, hobbies: e.target.value })}
            />
            <Label check>Swim</Label>
          </FormGroup>
          <Button className="mt-3 bg-danger  border-0 w-50 ">Submit</Button>
        </Form>
      </div>
      <div className="w-100 p-5">
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Password</th>
              <th>Gender</th>
              <th>Hobbies</th>
            </tr>
          </thead>
          <tbody>
            {userArr.map((e, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.email}</td>
                <td>{e.password}</td>
                <td>{e.gender}</td>
                <td>{e.hobbies.join(", ")}</td>

              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
