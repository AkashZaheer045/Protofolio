import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import BackToTopButton from "./BackToTopButton";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3033/api/send",
        formData
      );
      alert(response.data);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email");
    }
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 md:px-16 bg-white dark:bg-gray-900"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-700 dark:text-blue-400">
        Contact Me
      </h2>
      <div className="flex flex-col md:flex-row gap-10 max-w-4xl mx-auto">
        <div className="flex-1 bg-blue-50 dark:bg-gray-800 rounded-xl shadow p-6 md:p-8 flex flex-col items-center justify-center">
          <ul className="space-y-4 w-full">
            <li className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-200">
              <FontAwesomeIcon icon={faPhone} />
              <a
                href="tel:+923320594296"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                +92 332-0594296
              </a>
            </li>
            <li className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-200">
              <FontAwesomeIcon icon={faEnvelope} />
              <a
                href="mailto:akashzaheer786@gmail.com"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                akashzaheer786@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-200">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Islamabad, Pakistan</span>
            </li>
          </ul>
          <hr className="my-6 border-blue-200 dark:border-gray-700 w-full" />
          <div className="flex gap-6">
            <a
              href="https://github.com/BitAnon47"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/in/muhammad-akash-zaheer"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
            </a>
          </div>
        </div>
        <form
          id="contact-form"
          className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow p-6 md:p-8 flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="px-4 py-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="name"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            className="px-4 py-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="email"
            placeholder="E-Mail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="px-4 py-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[120px] resize-none"
            rows="10"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            className="flex items-center justify-center gap-2 px-6 py-3 rounded bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="submit"
            type="submit"
            value="SEND"
          >
            <FontAwesomeIcon icon={faPaperPlane} className="fa" />
            <span>SEND</span>
          </button>
        </form>
      </div>
      <BackToTopButton />
    </section>
  );
};

export default ContactForm;
