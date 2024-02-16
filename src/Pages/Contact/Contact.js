import React from "react";
import "./Contact.css";
import { Textarea } from "@mantine/core";
import { Button } from "@mantine/core";
const Contact = () => {
  return (
    <div>
      <div className="contact-page">
        <div className="contact-page-container">
          <h2>Contact Me</h2>
          <p>Name</p>
          <Textarea
            className="contact-form"
            placeholder="Name"
            autosize
            minRows={1}
            maxRows={1}
          />
          <p>Email</p>
          <Textarea
            className="contact-form"
            placeholder="Email"
            autosize
            minRows={1}
            maxRows={1}
          />
          <p>Message</p>
          <Textarea
            className="contact-form"
            placeholder="Message"
            autosize
            minRows={3}
            maxRows={3}
          />
          <Button className="send-button">Send</Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
