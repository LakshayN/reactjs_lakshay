import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import "./ApiContent.css";

const ApiContent = ({ name, contact, address, email }) => {
  return (
    <Fragment>
      <div className="main_container">
        <div className="container">
          <div className="box_header">
            <div>{name}</div>
            <div>{contact}</div>
          </div>
          <div className="contact">{email}</div>
          <div className="address">{address}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default ApiContent;
