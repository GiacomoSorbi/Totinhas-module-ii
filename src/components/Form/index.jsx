import React from "react";
import "./Form.css";
import { validation } from "../../functions";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setisEmailValid] = useState(true);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [isMessageValid, setiSMessageValid] = useState(true);
  const onChangeName = (event) => {
    setName(event.target.value);
    setIsNameValid(validation.name(event.target.value));
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
    setisEmailValid(validation.email(event.target.value));
  };
  const onChangePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
    setIsPhoneNumberValid(validation.phone(event.target.value));
  };

  const onChangeMessage = (event) => {
    setMessage(event.target.value);
    setiSMessageValid(validation.message(event.target.value));
  };
  const onClickSubmit = (event) => {
    setIsNameValid(validation.name(name));
    setisEmailValid(validation.email(email));
    setIsPhoneNumberValid(validation.phone(phoneNumber));
    setiSMessageValid(validation.message(message));
    if (
      validation.name(name) &&
      validation.email(email) &&
      validation.phone(phoneNumber) &&
      validation.message(message)
    ) {
      setIsSubmited(true);
    } else {
      setIsSubmited(false);
    }
  };
  return (
    <div className="contactForm">
      <form>
        <h2>Contact us</h2>
        <label htmlFor="name">Name:</label>
        <input onChange={onChangeName} value={name} name="name" type="text" />
        {isNameValid ? null : (
          <p className="errorName">please inset a valid name</p>
        )}

        <label htmlFor="email">Email:</label>
        <input
          onChange={onChangeEmail}
          value={email}
          type="email"
          name="email"
        />
        {isEmailValid ? null : (
          <p className="errorEmail">please inset a valid email</p>
        )}

        <label htmlFor="phoneNumber">Phone number:</label>
        <input
          onChange={onChangePhoneNumber}
          value={phoneNumber}
          type="number"
          name="phoneNumber"
        />
        {isPhoneNumberValid ? null : (
          <p className="errorPhoneNumber">please inset a valid phone number</p>
        )}

        <label htmlFor="message">Message:</label>
        <textarea onChange={onChangeMessage} value={message} name="message">
          Write your message
        </textarea>

        {isMessageValid ? null : (
          <p className="errorMessage">This field cannot be empty</p>
        )}

        <button type="button" onClick={onClickSubmit}>
          Submit
        </button>
        {isSubmited ? <h3>form submitted</h3> : null}
      </form>
    </div>
  );
};

export default Form;
