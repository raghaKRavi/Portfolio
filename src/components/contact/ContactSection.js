import React from "react";
import "./ContactSection.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ContactSection = () => {
  return (
    <div className="contact-subsection">
      <div className="paper-plane-container">
        <FontAwesomeIcon icon={faPaperPlane} />
      </div>
      <div className="contact-container">
        <h2>CONTACT</h2>
        <Form>
          <Form.Group>
            <Form.Control type="text" placeholder="Name" name="name" required />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="email"
              placeholder="E-mail address"
              name="email"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Subject"
              name="subject"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Message"
              name="message"
              required
            />
          </Form.Group>

          <Button type="submit">SUBMIT</Button>
        </Form>
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
