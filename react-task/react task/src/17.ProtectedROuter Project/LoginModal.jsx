import React, { useState } from 'react'
import Select from 'react-select'
import { Button, Modal, ModalHeader, ModalBody,  Form, Input, Label, FormGroup } from 'reactstrap';

export default function LoginModal({toggle,modal}) {
  const option=[
    {value:"user",label:"User"},
    {value:"admin",label:"Admin"},
    {value:"employee",label:"Employee"}

  ]
   return (
    <div>
      
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <Form>
  <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="with a placeholder"
      type="email"
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="password placeholder"
      type="password"
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
   <Select options={option}/>
  </FormGroup>
  <Button color="danger w-100 h" onClick={toggle}>
            Login
          </Button>
  </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}


