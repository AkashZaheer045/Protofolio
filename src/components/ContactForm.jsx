import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faPhone,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import BackToTopButton from "./BackToTopButton";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate API call (Replace with EmailJS logic)
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-16 bg-almond-100 dark:bg-gray-950 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-gray-100 dark:from-gray-900 via-transparent to-transparent opacity-50 pointer-events-none"></div>

      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white relative z-10">
        Get In Touch
      </h2>

      <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto relative z-10">
        {/* Contact Info Card */}
        <div className="flex-1 bg-almond-50 dark:bg-gray-900/80 backdrop-blur border border-almond-300 dark:border-gray-800 rounded-2xl p-8 flex flex-col justify-between shadow-2xl">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I'm open for freelance projects, full-time opportunities, or just a coffee chat. Feel free to reach out!
            </p>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-gray-800 flex items-center justify-center text-blue-600 dark:text-cyan-400">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <a href="tel:+923320594296" className="hover:text-blue-600 dark:hover:text-cyan-400 transition">
                  +92 332-0594296
                </a>
              </li>
              <li className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-gray-800 flex items-center justify-center text-blue-600 dark:text-cyan-400">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <a href="mailto:akashzaheer786@gmail.com" className="hover:text-blue-600 dark:hover:text-cyan-400 transition">
                  akashzaheer786@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-gray-800 flex items-center justify-center text-blue-600 dark:text-cyan-400">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <span>Islamabad, Pakistan</span>
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <h4 className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/AkashZaheer045"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white hover:border-blue-500 dark:hover:border-cyan-500 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a
                href="https://linkedin.com/in/muhammad-akash-zaheer"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white hover:border-blue-500 dark:hover:border-cyan-500 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          className="flex-1 bg-almond-50 dark:bg-gray-900 border border-almond-300 dark:border-gray-800 rounded-2xl p-8 flex flex-col gap-6 shadow-2xl"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-400 text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-cyan-500 transition-colors"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-400 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-cyan-500 transition-colors"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-400 text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-cyan-500 transition-colors resize-none"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "submitting" || status === "success"}
            className={`w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${status === "success"
              ? "bg-green-600 text-white cursor-default"
              : "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg hover:shadow-cyan-500/25"
              }`}
          >
            {status === "submitting" ? (
              <span>Sending...</span>
            ) : status === "success" ? (
              <>
                <FontAwesomeIcon icon={faCheckCircle} /> Sent Successfully
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faPaperPlane} /> Send Message
              </>
            )}
          </button>
        </form>
      </div>
      <BackToTopButton />
    </section>
  );
};

export default ContactForm;
