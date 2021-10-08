import React, { useState, useEffect, Fragment } from "react";
import "./HeadButtons.css";
import axios from "axios";
import ApiContent from "./ApiContent";
import Login from "./Login";

const HeadButtons = () => {
  const [userData, setUserData] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const [showAPI, setShowAPI] = useState(false);

  useEffect(() => {
    axios
      .get("https://dry-bayou-99944.herokuapp.com/profiles")
      .then((res) => {
        setUserData(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <Fragment>
      <div className="buttons">
        <button
          onClick={() => {
            setShowForm(true);
            setShowAPI(false);
          }}
        >
          Add Data
        </button>
        <button
          onClick={() => {
            setShowForm(false);
            setShowAPI(true);
          }}
        >
          Show Data
        </button>
      </div>
      {showForm && <Login /> }
      {showAPI && userData.map((data) => {
        return (
          <ApiContent
            key={data.id}
            name={data.name}
            contact={data.contact}
            email={data.email}
            address={data.address}
          />
        );
      })}
    </Fragment>
  );
};

export default HeadButtons;
