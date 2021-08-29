import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import PageBreadcrumb from "../components/PageBreadcrumb";
import SearchForm from "../components/SearchForm";
import TicketTable from "../components/TicketTable";
import tickets from "../assets/dummy-tickets.json";
import { Link } from "react-router-dom";

const TicketLists = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dispTicket, setDispTicket] = useState(tickets);

  useEffect(() => {}, [searchTerm, dispTicket]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    // console.log(value);
    setSearchTerm(value);

    searchResult(value);
  };

  // console.log(searchTerm);

  const searchResult = (searchTerm) => {
    const displayTickets = tickets.filter((tickets) =>
      tickets.subject.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // console.log(displayTickets);
    setDispTicket(displayTickets);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col className="mt-2">
            <PageBreadcrumb page="Tickets Listing" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/addticket">
              <Button variant="info" style={{ color: "white" }}>
                Add New Ticket
              </Button>
            </Link>
          </Col>
          <Col className="text-right">
            <SearchForm
              handleOnChange={handleOnChange}
              searchTerm={searchTerm}
            />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="mt-2">
            <TicketTable dispTicket={dispTicket} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TicketLists;
