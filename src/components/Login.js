import React, { Fragment, useState } from "react";
import "./Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [contact, setContact] = useState("");
  const [contactIsValid, setContactIsValid] = useState(true);
  const [address, setAddress] = useState("");
  const [addressIsValid, setAddressIsValid] = useState(true);
  const [formSubmit, setFormSubmit] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    if (name.trim() === "") {
      setNameIsValid(false);
      return;
    }
    if(email.includes('@') === false || email.includes('.') === false || email === ''){
      setEmailIsValid(false);
    }
    if(contact.length !== 10){
      setContactIsValid(false)
    }
    if(address.trim() === ''){
      setAddressIsValid(false)
    }
    setName('');
    setEmail('');
    setContact('');
    setAddress('');
    setFormSubmit(true);
    
  };

  const nameInputClasses = nameIsValid ? "form-group" : "error-group";
  const emailInputClass = emailIsValid ? "form-group" : "error-group";
  const contactInputClass = contactIsValid ? 'form-group' : "error-group";
  const addressInputClass = addressIsValid ? 'form-group' : "error-group";

  return (
    <Fragment>
      <form onSubmit={submitHandler} className="formContainer">
        <div className="mainForm">
          <div className={nameInputClasses}>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            {!nameIsValid && <p>Name Should be valid and not empty</p>}
          </div>

          <div className={emailInputClass}>
            <label>Email</label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            {!emailIsValid && <p>Enter a valid email</p>}
          </div>

          <div className={contactInputClass}>
            <label htmlFor="contact">Contact</label>
            <input
              type="number"
              onChange={(e) => setContact(e.target.value)}
            ></input>
            {!contactIsValid && <p>Contact is not valid</p>}
          </div>

          <div className={addressInputClass}>
            <label>Address</label>
            <input
              type="text"
              onChange={(e) => setAddress(e.target.value)}
            ></input>
            {!addressIsValid && <p>Address should not be empty</p>}
          </div>
          <div className="btn">
            <button type="submit" value="Submit">
              Submit
            </button>
          </div>
        </div>
      </form>   
    </Fragment>
  );
};

export default Login;
