import React from "react";
import { Button, Card, Container, Form, Row, Col } from "react-bootstrap";
import "../pages/entry.style.css";

const AddTicketForm = ({ handleOnSubmit, handleOnChange, formData }) => {
  console.log(formData);
  return (
    <Card className="mt-4 bg_formcard">
      <Card.Body>
        <h2 className="text-info text-center">Add New Tickets</h2>
        <br />
        <Form autoComplete="off" onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3" as={Row}>
            <Form.Label column sm={3}>
              Subject
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleOnChange}
                // required
              />
            </Col>
          </Form.Group>
          <Form.Group className="mb-3" as={Row}>
            <Form.Label column sm={3}>
              Issue found
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="date"
                name="issueDate"
                value={formData.issueDate}
                onChange={handleOnChange}
                // required
              />
            </Col>
          </Form.Group>
          <Form.Group className="mb-3" as={Row}>
            <Form.Label column sm={3}>
              Details
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                as="textarea"
                rows="5"
                name="detail"
                value={formData.detail}
                onChange={handleOnChange}
                // required
              />
            </Col>
          </Form.Group>
          <Button type="submit" variant="info" block style={{ color: "white" }}>
            Login
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddTicketForm;
