import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import "../pages/entry.style.css";

const Login = ({
  email,
  handleResetPassword,
  handleOnChange,
  formSwitcher,
}) => {
  return (
    <div>
      <Card className="card">
        <Card.Body>
          <Container>
            <h2 className="text-info text-center">Reset Password</h2>
            <br />
            <Form autoComplete="off" onSubmit={handleResetPassword}>
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

              <Button type="submit">Reset Password</Button>
            </Form>
            <br />
            <a href="#" onClick={() => formSwitcher("login")}>
              Login Now
            </a>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
