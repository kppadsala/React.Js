import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function InputCom() {
  let dataObj = {
    email: "",
    password: "",
  };
  const [user, setuser] = useState(dataObj);
  const [userArr, setuserArr] = useState([]);

  const addUser = (e) => {
    e.preventDefault();
    if (user == "") {
      
      setuserArr([...userArr, user]);
     setuser(dataObj)
    }
    else {
      alert("Fill This Input")
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center flex-column align-items-center">
        <h3 className="text-black">Your Email is {user.email}</h3>
        <h3 className="text-black">Your Password is {user.password}</h3>

        <Form className="border border-black p-5 mt-4 w-25 rounded-1">
          <FormGroup>
            <Label for="Email" className="text-black h5">
              Email
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Enter Your Email"
              type="email"
              className="border border-black "
              value={user.email }
              onChange={(e) => setuser({ ...user, email: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword" className="text-black h5">
              Password
            </Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="password placeholder"
              type="password"
              className="border border-black "
              value={user.password}
              onChange={(e) => setuser({ ...user, password: e.target.value })}
            />
          </FormGroup>
          <Button
            className="w-100 bg-info border-0 text-black fw-bold"
            onClick={(e) => addUser(e)}
          >
            SUBMIT
          </Button>
        </Form>
      </div>
      <div className="p-5">
        <Table
          bordered
          hover
          responsive
          className="border border-danger border-3"
        >
          <thead>
            <tr className="h4">
              <th>SR.NO</th>
              <th>EMAIL</th>
              <th>PASSWORD</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {userArr.map((user, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{user.email}</td>
                <td>{user.password}</td>

              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
