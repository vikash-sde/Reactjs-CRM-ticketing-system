import React from "react";
import { Form, Button } from "react-bootstrap";

const UpdateTicket = ({ msg, handleOnChange, handleOnSubmit }) => {
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Replay</Form.Label>
          <br />
          <Form.Text>
            Please replay your message here or update the ticket
          </Form.Text>
          <Form.Control
            as="textarea"
            name="detail"
            row="5"
            value={msg}
            onChange={handleOnChange}
          />
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Button variant="info" type="submit" style={{ color: "white" }}>
            Replay
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdateTicket;
