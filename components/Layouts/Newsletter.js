import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Thank you for subscribing.",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      emailjs
        .sendForm(
          "service_jbhxhrs",
          "template_7qnofm6",
          form.current,
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
      setEmail("");
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };
  const form = useRef();
  return (
    <>
      <div className="ai-subscribe-area pb-50">
        <div className="container">
          <div className="ai-subscribe-content">
            <h2>Subscribe to our Newsletter!</h2>

            <form
              className="newsletter-form"
              onSubmit={handleSubmit}
              ref={form}
            >
              <input
                type="email"
                className="input-newsletter"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />

              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
