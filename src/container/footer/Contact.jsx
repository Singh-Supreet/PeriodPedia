import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling

import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u8g8fto",
        "template_6ar6bdk",
        form.current,
        "kui3ddZmA6nrYpgju"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          // Display a success toast
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          // Display an error toast
          toast.error("Message could not be sent.");
        }
      );
  };

  return (
    <div className="contact-form section__padding" id="contact">
      <h1 className="gradient__text">Menstrual Cycle </h1>
      <form ref={form} onSubmit={sendEmail}>
        <label><p>Name</p></label>
        <input type="text" name="user_name" />
        <label><p>Email</p></label>
        <input type="email" name="user_email" />
        <label for="age"><p>Age</p></label>
        <input type="number" id="age" name="user_age" min="0" max="120" required  />
        <label><p>Message</p></label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      {/* ToastContainer to display toasts */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
