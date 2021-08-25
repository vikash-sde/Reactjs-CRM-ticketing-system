import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import PageBreadcrumb from "../components/PageBreadcrumb";
import tickets from "../assets/dummy-tickets.json";

const ticket = tickets[0];

const Ticket = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="mt-2">
            <PageBreadcrumb page="Ticket" />
          </Col>
        </Row>
        <Row className="d-flex justify-content-spacebetween">
          <Col className="mt-2" sm="10">
            <div className="subject">Subject: {ticket.subject}</div>
            <div className="addDate">AddDate: {ticket.addDate}</div>
            <div className="status">Status: {ticket.status}</div>
          </Col>

          <Col className="me-auto" sm="2">
            <Button className="" variant="outline-info">
              Close Tickets
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Ticket;
