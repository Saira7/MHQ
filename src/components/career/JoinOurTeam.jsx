import React, { useState } from "react";
import { motion } from "framer-motion";

const JoinOurTeam = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xlgrdrjz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", position: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative rounded-3xl p-8 sm:p-10 
                 bg-gradient-to-br from-white/90 via-blue-50/70 to-purple-50/70
                 backdrop-blur-xl border border-white/40
                 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] max-w-xl mx-auto"
    >
      {/* Decorative glow */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-400/30 rounded-full blur-3xl" />

      {/* Heading */}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        Join Our Team
      </h3>
      <p className="text-sm text-gray-600 mb-8">
        We’d love to hear from you. Fill out the form and we’ll get back to you.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
        {/* Name */}
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your Name*"
          className="w-full rounded-xl px-4 py-3.5 text-sm
                     bg-white/80 border border-gray-200
                     focus:outline-none focus:ring-2 focus:ring-blue-600
                     transition-all"
        />

        {/* Email */}
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Your Email*"
          className="w-full rounded-xl px-4 py-3.5 text-sm
                     bg-white/80 border border-gray-200
                     focus:outline-none focus:ring-2 focus:ring-blue-600
                     transition-all"
        />

        {/* Position Select */}
        <motion.select
          whileFocus={{ scale: 1.01 }}
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
          className="w-full rounded-xl px-4 py-3.5 text-sm
                     bg-white/80 border border-gray-200 text-gray-700
                     focus:outline-none focus:ring-2 focus:ring-blue-600
                     transition-all"
        >
          <option value="" disabled>
            Select Position*
          </option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <option value="Marketing Specialist">Marketing Specialist</option>
          <option value="Other">Other</option>
        </motion.select>

        {/* Message */}
        <motion.textarea
          whileFocus={{ scale: 1.01 }}
          rows="4"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about yourself..."
          className="w-full rounded-xl px-4 py-3.5 text-sm resize-none
                     bg-white/80 border border-gray-200
                     focus:outline-none focus:ring-2 focus:ring-blue-600
                     transition-all"
        />

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          type="submit"
          disabled={status === "sending"}
          className={`w-full py-3.5 rounded-full font-semibold text-white
                     shadow-lg hover:shadow-xl transition-all duration-300
                     ${
                       status === "idle" || status === "error"
                         ? "bg-gradient-to-r from-blue-900 to-blue-600 hover:from-blue-700 hover:to-blue-500"
                         : status === "sending"
                         ? "bg-gray-400 cursor-not-allowed"
                         : status === "success"
                         ? "bg-blue-600"
                         : ""
                     }`}
        >
          {status === "idle" && "SEND APPLICATION"}
          {status === "sending" && "SENDING..."}
          {status === "success" && "SENT SUCCESSFULLY!"}
          {status === "error" && "FAILED, TRY AGAIN"}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default JoinOurTeam;
