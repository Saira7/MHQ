import React, { useState } from "react";

const SubmitTestimonialForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwvendob";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRating = (star) => {
    setFormData((prev) => ({ ...prev, rating: star }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          rating: 0,
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="bg-white py-20 px-6 mx-auto max-w-3xl mt-24 rounded-2xl shadow-2xl border border-gray-200">
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 text-center mb-4">
        Submit Your Testimonial
      </h2>

      <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
        We’d love to hear about your experience.
      </p>

      {/* SUCCESS */}
      {status === "success" && (
        <div className="text-center p-6 bg-green-100 rounded-lg">
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            Thank you!
          </h3>
          <p className="text-green-700">
            Your testimonial has been submitted successfully.
          </p>
        </div>
      )}

      {/* ERROR */}
      {status === "error" && (
        <div className="text-center p-4 bg-red-100 rounded-lg mb-6">
          <p className="text-red-700">
            Something went wrong. Please try again.
          </p>
        </div>
      )}

      {/* FORM */}
      {status !== "success" && (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-3">
              Rating
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => handleRating(star)}
                  className={`text-3xl ${
                    formData.rating >= star
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-2">
              Your Testimonial
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* Submit */}
          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-8 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition disabled:opacity-50"
            >
              {status === "sending" ? "Submitting..." : "Submit Testimonial"}
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default SubmitTestimonialForm;
