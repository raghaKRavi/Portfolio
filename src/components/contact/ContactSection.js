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

  const clearState = () => {
    setState({ ...initialState });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const { state, submit } = useForm({
    id: "pAuazoJ_YMC7",
  });

  if (state.submitting) {
    clearForm().then(clearState);
  }

  // {
  //   props.tags.map((tag) => {
  //     console.log(tag);
  //   });
  // }

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
              id="form-input"
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
              id="form-input"
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
              id="form-input"
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
              rows="4"
              placeholder="Message"
              name="message"
              value={message}
              onChange={onChange}
              required
            />
          </Form.Group>

          <div
            className="sent-message"
            id={state.submitted ? "show-message" : "hide-message"}
          >
            Message Sent successfully..!!
          </div>

          <Button type="submit">SUBMIT</Button>
        </Form>
      </div>
    </div>
  );
};

export default ContactSection;
