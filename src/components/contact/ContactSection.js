import React, { Component, useState } from "react";
import "./ContactSection.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import axios from "axios";
import { useForm } from "@formcarry/react";

function clearForm() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactSection = () => {
  const [{ name, message, email, subject }, setState] = useState(initialState);

  const [sent, setSent] = useState(false);

  const clearState = () => {
    setState({ ...initialState });
    setSent(false);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const onClick = (e) => {
    const { value } = e.target;
    setSent((value) => !value);
  };

  const { state, submit } = useForm({
    id: "pAuazoJ_YMC7",
  });

  if (state.submitting) {
    clearForm().then(clearState);
  }

  return (
    <div className="contact-subsection">
      <div className="paper-plane-container">
        <FontAwesomeIcon
          icon={faPaperPlane}
          id={state.submitted && "animation"}
        />
      </div>
      <div className="contact-container">
        <h2>CONTACT</h2>
        <Form onSubmit={submit}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="email"
              placeholder="E-mail address"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Subject"
              name="subject"
              value={subject}
              onChange={onChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Message"
              name="message"
              value={message}
              onChange={onChange}
              required
            />
          </Form.Group>

          <div
            className="sent-message"
            id={sent ? "show-message" : "hide-message"}
          >
            Message Sent successfully..!!
          </div>

          <Button type="submit" onClick={onClick}>
            SUBMIT
          </Button>
        </Form>

        {/* footer */}
        <div className="contact-footer">
          <p>
            e-mail:
            <a href="mailto:ragavravi25@gmail.com">ragavravi25@gmail.com</a>
          </p>
          <div className="social-network-link">
            <ul>
              <li>
                <a
                  href="https://github.com/Ragav25"
                  target="_blank"
                  id="github-link"
                >
                  <FontAwesomeIcon icon={faGithubSquare} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/raghavendar-ravi-48ab75137/"
                  target="_blank"
                  id="linkedin-link"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
