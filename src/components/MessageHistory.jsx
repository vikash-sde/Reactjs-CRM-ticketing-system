import React from "react";
import "./message-history.style.css";

const MessageHistory = ({ msg }) => {
  if (!msg) return null;

  return msg.map((row, i) => (
    <div key={i} className="message_history mt-3">
      <div className="send font-weight-bold text-secondary">
        <div className="sender">{row.messageBy}</div>
        <div className="date">{row.date}</div>
      </div>
      <div className="message">{row.message}</div>
    </div>
  ));
};

export default MessageHistory;
