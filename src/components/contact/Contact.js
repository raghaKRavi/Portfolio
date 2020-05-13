import React, { useState } from "react";

import "./Contact.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {
  const [planeAnimation, setPlaneAnimation] = useState(false);
  return (
    <div className="contact-body">
      <div className="contact-heading">
        <h3>GET IN TOUCH!</h3>
      </div>
      <div className="back-line"></div>

      <div className="contact-grid">
        <div className="paper-plane">
          <svg
            onAnimationEnd={() => setPlaneAnimation(false)}
            id={planeAnimation ? "animation-plane" : ""}
            width="400"
            height="321"
            viewBox="0 0 404 321"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M401.03 40.7499C399.185 39.5307 396.739 39.3422 394.749 40.2657L10.4157 218.629C6.69918 220.354 5.03029 224.197 6.44771 227.766C7.86366 231.336 11.9267 233.523 16.1071 232.966L111.331 220.271L170.089 296.37C170.61 297.064 171.321 297.661 172.19 298.092C172.894 298.44 173.644 298.652 174.399 298.734C174.862 298.784 175.326 298.784 175.783 298.739C176.051 298.711 176.315 298.668 176.573 298.609C176.576 298.608 176.579 298.608 176.583 298.608C177.734 298.344 178.789 297.767 179.574 296.905C179.576 296.903 179.579 296.9 179.581 296.898C179.581 296.897 179.582 296.897 179.582 296.896C179.584 296.894 179.585 296.892 179.587 296.89C179.588 296.889 179.589 296.888 179.59 296.887C179.59 296.886 179.592 296.884 179.593 296.883C179.594 296.882 179.595 296.88 179.596 296.878C179.597 296.878 179.598 296.876 179.599 296.875C179.601 296.873 179.604 296.87 179.606 296.867L228.551 242.194L332.94 289.657C337.091 291.545 341.836 291.629 345.961 289.892C350.085 288.154 352.933 284.868 353.776 280.876L403.371 45.9663C403.786 44.0012 402.875 41.9696 401.03 40.7499ZM111.693 209.671L32.5599 220.221L306.84 92.9313L111.693 209.671ZM196.144 221.635C196.144 221.635 196.143 221.636 196.143 221.636C196.13 221.659 196.117 221.682 196.105 221.704C195.983 221.925 195.882 222.151 195.8 222.379L173.09 282.054L122.172 216.108L352.483 78.3318L197.221 220.324C196.796 220.695 196.432 221.131 196.148 221.628C196.146 221.63 196.145 221.633 196.144 221.635ZM191.452 266.667L204.865 231.425L217.755 237.286L191.452 266.667ZM342.216 278.705C341.988 279.787 341.15 280.286 340.67 280.488C340.19 280.691 339.219 280.954 338.094 280.442L211.164 222.73L388.219 60.8064L342.216 278.705Z"
              fill="#F8BF3C"
            />
          </svg>
        </div>

        <div className="contact-form">
          <Form>
            <Form.Group>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="email" placeholder="E-mail" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="SUBJECT" />
            </Form.Group>

            <Form.Group>
              <Form.Control as="textarea" rows="3" placeholder="Message" />
            </Form.Group>

            <Button onClick={() => setPlaneAnimation(true)} type="submit">
              SEND
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
