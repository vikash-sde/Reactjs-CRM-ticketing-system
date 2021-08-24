import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const SearchForm = ({ handleOnChange, searchTerm }) => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" as={Row}>
          <Col sm="6"></Col>
          <Col sm="6">
            <Form.Control
              placeholder="Search.."
              name="searchStr"
              value={searchTerm}
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SearchForm;
