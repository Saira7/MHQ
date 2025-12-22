import React, { useState } from "react";
import { motion } from "framer-motion";
import { services } from "../../pages/Services";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    businessSize: "",
    consultationType: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle, sending, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xbdrabgd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          businessSize: "",
          consultationType: "",
          message: "",
        });
      } else {
        const data = await response.json();
        setStatus("error");
        setErrorMessage(data?.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <section className="py-24 px-6 relative z-10 bg-gray-50">
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-12"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Request a Consultation
        </h2>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
          {/** Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              placeholder="Your name"
            />
          </div>

          {/** Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              placeholder="example@email.com"
            />
          </div>

          {/** Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              placeholder="+1 234 567 890"
            />
          </div>

          {/** Company */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              placeholder="Your Company"
            />
          </div>

          {/** Service */}
          <div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Type of Service Required
  </label>
  <select
    name="service"
    value={formData.service}
    onChange={handleChange}
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
  >
    <option value="">Choose a service</option>
    {services.map((service, index) => (
      <option key={index} value={service.title}>
        {service.title}
      </option>
    ))}
  </select>
</div>


          {/** Business Size */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Size
            </label>
            <select
              name="businessSize"
              value={formData.businessSize}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            >
              <option value="">Select size</option>
              <option>Sole Trader</option>
              <option>Small Business (1–10)</option>
              <option>Medium Business (11–50)</option>
              <option>Large Organisation</option>
            </select>
          </div>

          {/** Consultation Type */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Consultation Type
            </label>
            <select
              name="consultationType"
              value={formData.consultationType}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            >
              <option>Phone Call</option>
              <option>Video Meeting</option>
              <option>Email</option>
            </select>
          </div>

          {/** Message */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              placeholder="Briefly describe your requirements"
            />
          </div>

          {/** Submit Button */}
          <div className="md:col-span-2 text-center pt-6">
            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-12 py-4 rounded-xl shadow-lg transition-all disabled:opacity-50"
            >
              {status === "sending"
                ? "Sending..."
                : status === "success"
                ? "Sent Successfully"
                : status === "error"
                ? "Failed. Try Again"
                : "Request Consultation"}
            </motion.button>
          </div>

          {status === "error" && (
            <p className="md:col-span-2 text-center text-red-600 mt-2">
              {errorMessage}
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
