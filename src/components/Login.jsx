import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import "../pages/entry.style.css";

const Login = ({
  email,
  password,
  handleOnSubmit,
  handleOnChange,
  formSwitcher,
}) => {
  return (
    <div>
      <Card className="bg_card">
        <Card.Body>
          <Container>
            <h2 className="text-info text-center">Client Login</h2>
            <br />
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter email"
                  onChange={handleOnChange}
                  // required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  placeholder="password"
                  onChange={handleOnChange}
                  // required
                />
              </Form.Group>
              <Button type="submit">Login</Button>
            </Form>
            <br />
            <a href="#" onClick={() => formSwitcher("reset")}>
              Forget password
            </a>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
