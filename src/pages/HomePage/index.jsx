import React, { useState } from "react";
import "./HomePage.css";
import { validation } from "../../functions";
import { basePath } from "../../constants";

const HomePage = ({ isLoggedIn, onLogin, onLogout }) => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setisEmailValid] = useState(true);
  const [emailIsSent, setEmailIsSent] = useState(false);
  const [APIkey, setAPIKey] = useState("");
  const [APIkeyIsValid, setAPIKeyIsValid] = useState(true);

  const onChangeAPIkey = (event) => {
    setAPIKey(event.target.value);
    setAPIKeyIsValid(validation.APIKey(event.target.value));
  };

  const submitAPIkey = (event) => {
    event.preventDefault();
    setAPIKeyIsValid(validation.APIKey(APIkey));

    if (validation.APIKey(APIkey)) {
      onLogin(APIkey);
    }
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
    setisEmailValid(validation.email(event.target.value));
  };

  const sendEmail = (event) => {
    event.preventDefault();
    setisEmailValid(validation.email(email));

    if (validation.email(email)) {
      setEmailIsSent(true);
    } else {
      setEmailIsSent(false);
    }
  };

  return (
    <div className="HomePage">
      <h2>
        TPWARS is a tool to help you manage items, understand how long they
        last, and how often you need to buy it.
      </h2>
      <p>
        <strong>
          With a personalise dashboard where you can add and remove items,
          what’s not to like?
        </strong>
      </p>
      {isLoggedIn ? (
        <button onClick={onLogout}>Logout</button>
      ) : (
        <div className="keyRequest">
          <div className="key">
            <h3>Login using your key</h3>
            <p>
              If you have a key, please insert it below to access your account.{" "}
            </p>
            <form>
              <label htmlFor="key">Key:</label>
              <input
                name="key"
                type="password"
                placeholder="Your personal key"
                value={APIkey}
                onChange={onChangeAPIkey}
              />
              {APIkeyIsValid ? null : <p>please inset a valid API key</p>}
              <button type="button" onClick={submitAPIkey}>
                Submit
              </button>
              <p className="small">
                Having problems accessing your account?{" "}
                <a href={basePath + "/contacts"}>Contact us</a>
              </p>
            </form>
          </div>
          <div className="request">
            <h3>Don’t have an account yet?</h3>
            <p>
              Please insert your email below to request a key for a new account.
            </p>
            <form>
              <label htmlFor="email">Email:</label>
              <input
                name="email"
                type="email"
                placeholder="jon.white@gmail.com"
                value={email}
                onChange={onChangeEmail}
                disabled={emailIsSent}
              />
              {isEmailValid ? null : <p>please inset a valid email</p>}
              {emailIsSent ? (
                <p>check your inbox for a key</p>
              ) : (
                <button onClick={sendEmail}>Request</button>
              )}
              <p className="small">
                Having problems requesting access?{" "}
                <a href={basePath + "/contacts"}>Contact us</a>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
