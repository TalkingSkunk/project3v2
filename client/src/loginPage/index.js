import { Button, FormGroup } from "react-bootstrap";
import React from "react";
import { Form } from "react-bootstrap";

import RegisterForm from "./RegisterForm";

function Login() {
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <FormGroup>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <RegisterForm />
        </FormGroup>
      </Form>
    </div>
  );
}

export default Login;
