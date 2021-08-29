import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import TicketTable from "./TicketTable";

import tickets from "../assets/dummy-tickets.json";
import PageBreadcrumb from "./PageBreadcrumb";
import { Link } from "react-router-dom";

const Dashboard = () => {
  console.log(tickets);
  return (
    <div>
      <Container>
        <Row>
          <Col className=" mt-2 ">
            <PageBreadcrumb page="Dashboard" />
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3 mb-2">
            <Link to="/addticket">
              <Button
                variant="info"
                style={{
                  "font-size": "1.2rem",
                  padding: "10px 30px",
                  color: "white",
                }}
              >
                Add New Ticket
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3 mb-2">
            <div>Total ticket:50</div>
            <div>Pending ticket:3</div>
          </Col>
        </Row>
        <Row>
          <Col className=" mt-3 mb-2">Recently added tickets</Col>
        </Row>
        <Row>
          <Col className="recent_ticket mt-3">
            {/* <TicketTable tickets={tickets} /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
