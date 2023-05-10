import React from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

const Discord = () => {
  const navigate = useNavigate();
  function next() {
    navigate("/vsc", { replace: true });
  }
  function back() {
    navigate("/firefox", { replace: true });
  }
  function sendEmail(e: any) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        "service_6pe3lag",
        "template_ts7csvf",
        e.target,
        "6AAn9DYVf1bNGnqL8"
      )
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="discord">
      <form className="contact-form fade-in" onSubmit={sendEmail}>
        <h1 className="title">Contact me ! You're on discord</h1>
        <br />
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="from_email" />
        <label>Subject</label>
        <input type="text" name="subject" />
        <label>Message</label>
        <textarea name="message" />
        <input className="submit" type="submit" value="Send" />
        <br />
        <h3 className="title">Or pass your way</h3>
        <br />
        <img
          className="img"
          height="50px"
          src="./arrow2.png"
          alt="Left arrow"
          onClick={back}
        />
        <img
          className="img"
          height="50px"
          src="./arrow1.png"
          alt="Right arrow"
          onClick={next}
        />
      </form>
    </div>
  );
};

export default Discord;
