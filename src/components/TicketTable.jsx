import React from "react";
import { Table } from "react-bootstrap";

const TicketTable = ({ dispTicket }) => {
  //   console.log(tickets);
  return (
    <div>
      <Table striped bordered hover size="md">
        <thead>
          <tr>
            <th>#</th>
            <th>Subjects</th>
            <th>Status</th>
            <th>Opened Date</th>
          </tr>
        </thead>
        <tbody>
          {dispTicket.length ? (
            dispTicket.map(({ id, status, addDate, subject }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{subject}</td>
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
