import React, { useState } from "react";

const SubmitTestimonialForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    message: "",
    image: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwvendob";

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle rating click
  const handleRating = (star) => {
    setFormData({ ...formData, rating: star });
  };

  // Optional: reset form after submission
  const handleSubmit = (e) => {
    setSubmitted(true);
  };

  return (
    <section className="bg-white py-20 px-6 mx-auto max-w-3xl mt-24 rounded-2xl shadow-2xl border border-gray-200">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 text-center mb-4">
        Submit Your Testimonial
      </h2>
      <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
        We’d love to hear how your experience was. Your feedback helps others trust our services!
      </p>

      {submitted ? (
        <div className="text-center p-6 bg-green-100 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-green-700 mb-2">Thank you!</h3>
          <p className="text-green-700">Your testimonial has been submitted successfully.</p>
        </div>
      ) : (
        <form
          className="space-y-6"
          action={FORMSPREE_ENDPOINT}
          method="POST"
          onSubmit={handleSubmit}
        >
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
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none transition duration-200 hover:shadow-md"
              required
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
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none transition duration-200 hover:shadow-md"
              required
            />
          </div>

          {/* Rating Stars */}
          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-3">
              Rating
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleRating(star)}
                  className={`text-3xl cursor-pointer transition duration-200 ${
                    formData.rating >= star
                      ? "text-yellow-400"
                      : "text-gray-300 hover:text-yellow-400"
                  }`}
                >
                  ★
                  <input type="hidden" name="rating" value={formData.rating} />
                </span>
              ))}
            </div>
          </div>

          {/* Testimonial Message */}
          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-2">
              Your Testimonial
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your experience with us..."
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none resize-none transition duration-200 hover:shadow-md"
              required
            ></textarea>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-2">
              Upload Photo (optional)
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 cursor-pointer transition duration-200 hover:bg-gray-100"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="px-8 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition duration-200 shadow-lg transform hover:scale-105"
            >
              Submit Testimonial
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default SubmitTestimonialForm;
