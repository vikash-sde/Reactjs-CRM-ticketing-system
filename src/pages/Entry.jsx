import React, { useState } from "react";
import Login from "../components/Login";
import ResetPassword from "../components/ResetPassword";
import "./entry.style.css";

const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("login");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Fill all the details");
    }
    //TODO call api to submit the form
    console.log(email, password);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email..");
    }
    //TODO call api to submit the form
    console.log(email);
  };

  const formSwitcher = (frmtype) => {
    setFormLoad(frmtype);
  };

  return (
    <div className="entry_page bg-info">
      {formLoad === "login" && (
        <Login
          email={email}
          password={password}
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
          formSwitcher={formSwitcher}
        />
      )}

      {formLoad === "reset" && (
        <ResetPassword
          email={email}
          onChange={handleOnChange}
          resetPassword={handleResetPassword}
          formSwitcher={formSwitcher}
        />
      )}
    </div>
  );
};

export default Entry;
