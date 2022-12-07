import React, { useState, useRef } from "react";

const Form = () => {
  const formRef = useRef(null);
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbziYLO7VN1PtUIAGhRFhOOb45NoZedg4AkAqLss4XcAgFdGjfE9QdqSb52C1DCq4fzu/exec";

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(true);

    fetch(scriptUrl, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleSendAnother = () => {
    setSubmitted(false);
  };

  return (
    <div className="w-full">
      {!submitted && (
        <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
          <div className="flex gap-5">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              className="w-1/2 h-[60px] px-5 text-[0.85rem] bg-inherit border border-red-600 rounded-lg outline-none"
              required
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              className="w-1/2 h-[60px] px-5 text-[0.85rem] bg-inherit border border-red-600 rounded-lg outline-none"
              required
            />
          </div>
          <div className="flex gap-5 mt-8">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="w-1/2 h-[60px] px-5 text-[0.85rem] bg-inherit border border-red-600 rounded-lg outline-none"
              required
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone number"
              className="w-1/2 h-[60px] px-5 text-[0.85rem] bg-inherit border border-red-600 rounded-lg outline-none"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Enter your message here"
            className="w-full h-[150px] pt-5 px-5 mt-8 text-[0.85rem] bg-inherit border border-red-600 rounded-lg outline-none"
            required
          ></textarea>
          <button
            onClick={handleSubmit}
            className="w-full py-5 mt-8 bg-red-600 rounded-lg hover:translate-y-[6px] transition-all duration-300"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}
      {submitted && (
        <div className="w-full h-full flex justify-center items-center">
          <div>
            <h3 className="text-[1.5rem]">
              Thank you for reaching out. We’ll get back to you soon.
            </h3>
            <button
              onClick={handleSendAnother}
              className="w-full py-5 mt-8 bg-red-600 rounded-lg hover:translate-y-[6px] transition-all duration-300"
            >
              Send Another
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
