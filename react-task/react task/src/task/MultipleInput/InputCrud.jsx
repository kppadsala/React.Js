import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

let data = {
  email: "",
  password: "",
  gender: "",
  hobbies: []
};

export default function InputCrud() {
  let [user, setUser] = useState(data);
  let [userArr, setUserArr] = useState([]);

  const addUser = (e) => {
    e.preventDefault();
    setUserArr([user, ...userArr]);
    setUser(data); // Reset user state
  };

  const checkHandler = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setUser({ ...user, hobbies: [...user.hobbies, value] });
    } else {
      setUser({ ...user, hobbies: user.hobbies.filter((hobby) => hobby !== value) });
    }
  };

  return (
    <div className="w-100 d">
      <div className="d-flex justify-content-center border-2 border border-black py-4 m-auto w-70 rounded shadow my-4">
        <Form className="w-50 p-0" onSubmit={(e) => addUser(e)}>
          <FormGroup>
            <h5>Email</h5>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Enter Your Email"
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <h5>Password</h5>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Enter Your Password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </FormGroup>

          <FormGroup tag="fieldset">
            <h5>Select Your Gender</h5>

            <FormGroup check>
              <Input
                name="gender"
                type="radio"
                value="male"
                checked={user.gender === "male"}
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
              />
              <Label check>Male</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                name="gender"
                type="radio"
                value="female"
                checked={user.gender === "female"}
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
              />
              <Label check>Female</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                name="gender"
                type="radio"
                value="other"
                checked={user.gender === "other"}
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
              />
              <Label check>Other</Label>
            </FormGroup>
          </FormGroup>
          <h5>Select Your Hobbies</h5>
          <FormGroup check>
            <Input
              type="checkbox"
              value="Reading"
              onChange={checkHandler}
              checked={user.hobbies.includes("Reading")}
            />
            <Label check>Reading</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              value="Traveling"
              onChange={checkHandler}
              checked={user.hobbies.includes("Traveling")}
            />
            <Label check>Traveling</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              value="Photography"
              onChange={checkHandler}
              checked={user.hobbies.includes("Photography")}
            />
            <Label check>Photography</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              value="Cycling"
              onChange={checkHandler}
              checked={user.hobbies.includes("Cycling")}
            />
            <Label check>Cycling</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              value="Sports & Fitness"
              onChange={checkHandler}
              checked={user.hobbies.includes("Sports & Fitness")}
            />
            <Label check>Sports & Fitness</Label>
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
              <th>SR.No</th>
              <th>EMAIL</th>
              <th>PASSWORD</th>
              <th>GENDER</th>
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
