import React from "react";
import { Table } from "react-bootstrap";

const TicketTable = ({ tickets }) => {
  //   console.log(tickets);
  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Subjects</th>
            <th>Status</th>
            <th>Opened Date</th>
          </tr>
        </thead>
        <tbody>
          {tickets.length ? (
            tickets.map(({ id, status, addDate }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>ssl issue</td>
                <td>{status}</td>
                <td>{addDate}</td>
              </tr>
            ))
          ) : (
            <td colSpan="4" className="text-center">
              No tickets to Show
            </td>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default TicketTable;
