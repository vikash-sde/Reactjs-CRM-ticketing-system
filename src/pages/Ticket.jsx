import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import PageBreadcrumb from "../components/PageBreadcrumb";
import tickets from "../assets/dummy-tickets.json";
import MessageHistory from "../components/MessageHistory";
import UpdateTicket from "../components/UpdateTicket";
import { useParams } from "react-router-dom";

// const ticket = tickets[0];

const Ticket = () => {
  const { tid } = useParams();
  const [message, setMessage] = useState("");
  const [ticket, setTicket] = useState("");

  useEffect(() => {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i].id == tid) {
        setTicket(tickets[i]);
        continue;
      }
    }
  }, [message, tid]);

  // console.log(ticket);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = () => {
    alert("Form submitted");
  };

  // console.log(message);

  return (
    <div>
      <Container>
        <Row>
          <Col className="mt-2">
            <PageBreadcrumb page="Ticket" />
          </Col>
        </Row>

        <Row className="d-flex justify-content-spacebetween">
          <Col className="mt-2 text-weight-bolder text-secondary" sm="10">
            {tid}
            <div className="subject">Subject: {ticket.subject}</div>
            <div className="addDate">AddDate: {ticket.addDate}</div>
            <div className="status">Status: {ticket.status}</div>
          </Col>

          <Col className="me-auto te" sm="2">
            <Button className="" variant="outline-info">
              Close Tickets
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="mt-4">
            {ticket.history && <MessageHistory msg={ticket.history} />}
          </Col>
        </Row>
        <Row>
          <Col className="mt-4">
            <UpdateTicket
              msg={message}
              handleOnChange={handleOnChange}
              handleOnSubmit={handleOnSubmit}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Ticket;
