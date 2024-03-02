import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button, Table } from "reactstrap";

let info = {
  email: "",
  password: "",
  gender: "",
  hobbies: []
};

export default function InputCrud2() {
  let [user, setUser] = useState(info);
  let [userArr, setUserArr] = useState([]);

  const addUser = (e) => {
    e.preventDefault();
    setUserArr([user, ...userArr]);
    setUser(info);
  };

  const checkHandler = (hobby, e) => {
    if (e.target.checked) {
      setUser({ ...user, hobbies: [...user.hobbies, hobby] });
    } else {
      setUser({
        ...user,
        hobbies: user.hobbies.filter((item) => item !== hobby)
      });
    }
  };

  const deleteUser = (index) => {
    setUserArr(userArr.filter((e, i) => i !== index));
  };

  const updateUser = (index) => {
    setUser(userArr[index]);
    deleteUser(index);
  };

  return (
    <div
      className="flex-column  align-items-center "
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px"
      }}
    >
      <div
        style={{
          border: "2px solid black",
          padding: "50px"
        }}
      >
        <Form onSubmit={(e) => addUser(e)}>
          <FormGroup>
            <Label for="exampleEmail" className="fw-bold">
              Email
            </Label>
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
            <Label for="examplePassword" className="fw-bold">
              Password
            </Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Enter Your Password"
              type="password"
              value={user.password}
              onChange={(e) =>
                setUser({ ...user, password: e.target.value })
              }
            />
          </FormGroup>

          <FormGroup tag="fieldset">
            <legend className="fw-bold">Gender</legend>
            <FormGroup check>
              <Input
                value="Male"
                checked={user.gender === "Male"}
                onChange={(e) =>
                  setUser({ ...user, gender: e.target.value })
                }
                type="radio"
              />
              <Label check>Male</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                value="Female"
                checked={user.gender === "Female"}
                onChange={(e) =>
                  setUser({ ...user, gender: e.target.value })
                }
                type="radio"
              />
              <Label check>Female</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                value="Other"
                checked={user.gender === "Other"}
                onChange={(e) =>
                  setUser({ ...user, gender: e.target.value })
                }
                type="radio"
              />
              <Label check>Other</Label>
            </FormGroup>
          </FormGroup>
          <legend className="fw-bold">Select Your Hobbies</legend>
          <FormGroup check>
            <Input
              type="checkbox"
              checked={user.hobbies.includes("Reading")}
              onChange={(e) => checkHandler("Reading", e)}
            />
            <Label check>Reading</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              checked={user.hobbies.includes("Traveling")}
              onChange={(e) => checkHandler("Traveling", e)}
            />
            <Label check>Traveling</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              checked={user.hobbies.includes("Painting")}
              onChange={(e) => checkHandler("Painting", e)}
            />
            <Label check>Painting</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              checked={user.hobbies.includes("Cycling")}
              onChange={(e) => checkHandler("Cycling", e)}
            />
            <Label check>Cycling</Label>
          </FormGroup>
          <Button className="bg-danger  border-0 mt-5 w-100">Submit</Button>
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
              <th>Action</th>
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
                <td>
                  <Button onClick={() => updateUser(i)} color="info">
                    Update
                  </Button>{" "}
                  <Button onClick={() => deleteUser(i)} color="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
