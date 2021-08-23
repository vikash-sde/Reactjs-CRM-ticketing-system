import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddTicketForm from "../components/AddTicketForm";
import PageBreadcrumb from "../components/PageBreadcrumb";

const initialFormData = {
  subject: "",
  issueDate: null,
  detail: "",
};

const Addticket = () => {
  const [formData, setformData] = useState(initialFormData);
  useEffect(() => {}, [formData]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted", formData);
  };

  return (
    <Container>
      <Row>
        <Col className="mt-2">
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formData={formData}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Addticket;
