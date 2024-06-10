import React from "react";
import Header from "./Header";

const Contact = () => {
  return (
    <>
      <Header />

      <div className="contact-container">
        <form>
          <div className="flex flex-col gap-1">
            <label>Full Name</label>
            <input
              type="text"
              name="userName"
              placeholder="Your full name"
              className="border-none p-2 text-black rounded outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input
              type="text"
              name="userName"
              placeholder="Your email address"
              className="border-none p-2 text-black rounded outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message">Text Message </label>
            <textarea
              name="message"
              id="message"
              rows="6"
              cols="50"
              placeholder="Your message"
              className="border-none mb-8 p-2 text-black rounded outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 py-2 rounded-3xl hover:bg-orange-400 text-semibold"
            >
              Send your message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
