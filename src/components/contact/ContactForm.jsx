import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [status, setStatus] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get form data
    const form = e.target;
    const formData = new FormData(form);

    // Convert form data to a plain object
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Send the data as JSON to Formspree
    const response = await fetch("https://formspree.io/f/mdkqwrbn", {
      method: "POST",
      body: JSON.stringify(data),  // Send data as JSON
      headers: {
        "Content-Type": "application/json",  // Indicate that the body contains JSON data
        Accept: "application/json",  // Tell Formspree we expect a JSON response
      },
    });

    // Check response
    if (response.ok) {
      setStatus("Message sent successfully!");
      form.reset();
    } else {
      setStatus("Oops! Something went wrong.");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}  // Attach handleSubmit to form submit
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-lg rounded-lg p-8 flex flex-col gap-4"
    >
      <h3 className="text-2xl font-bold text-blue-900 mb-4">Send Us a Message</h3>
      
      <input
        type="text"
        name="name"  // Add a name attribute for Formspree to capture the value
        placeholder="Full Name"
        className="border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-900 outline-none w-full"
      />
      
      <input
        type="email"
        name="email"  // Add name for email
        placeholder="Email Address"
        className="border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-900 outline-none w-full"
      />
      
      <input
        type="text"
        name="subject"  // Add name for subject
        placeholder="Subject"
        className="border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-900 outline-none w-full"
      />
      
      <textarea
        name="message"  // Add name for message
        placeholder="Your Message"
        rows={5}
        className="border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-900 outline-none w-full"
      />
      
      <button
        type="submit"
        className="mt-2 px-6 py-3 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-800 transition"
      >
        Submit
      </button>
      
      {/* Show the status message */}
{status && (
  <p
    className={`text-center mt-4 text-sm font-semibold ${
      status.includes("successfully") ? "text-blue-600" : "text-red-600"
    }`}
  >
    {status}
  </p>
)}

    </motion.form>
  );
};

export default ContactForm;
