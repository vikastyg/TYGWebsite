import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  from_name: "",
  email: "",
  select:"",
  phone: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const url = `${baseUrl}/api/contact`;
      // const { name, email, phone, subject, message } = contact;
      // const payload = { name, email, phone, subject, message };
      // const response = await axios.post(url, payload);
      emailjs
        .sendForm(
          "service_jbhxhrs",
          "template_rh8knom",
          form.current ,
          "BuhKGgDvbujhguI9I"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      // console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} ref={form}>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                className="form-control"
                value={contact.from_name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="form-control"
                value={contact.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {/* select option  */}
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <select
                name="select"
                className="form-control"
                value={contact.select}
                onChange={handleChange}
                required
              >
                <option value="" disabled selected>
                  Select Topic
                </option>
                <option value="Software Development">Software Development </option>
                <option value="Software Testing">Software Testing</option>
                <option value="IT Skills Enhancement">IT Skills Enhancement</option>
                <option value="IT Consulting">IT Consulting</option>
                <option value="Career Opportunities">Career Opportunities</option>
                <option value="Other topics">Other topics</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="phone"
                placeholder="Phone number"
                className="form-control"
                value={contact.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="form-control"
                value={contact.subject}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="form-group">
              <textarea
                name="message"
                cols="30"
                rows="6"
                placeholder="Write your message..."
                className="form-control"
                value={contact.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-12 col-sm-12">
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
