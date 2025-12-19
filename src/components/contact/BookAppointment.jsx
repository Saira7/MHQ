import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const BookAppointment = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [selectedDate, setSelectedDate] = useState(today);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const dates = [];
  for (let i = 0; i < firstDay; i++) dates.push(null);
  for (let i = 1; i <= totalDays; i++) dates.push(i);

  const isSelected = (day) =>
    day &&
    selectedDate.getDate() === day &&
    selectedDate.getMonth() === month &&
    selectedDate.getFullYear() === year;

  const isPastDate = (day) => {
    if (!day) return false;
    const date = new Date(year, month, day);
    return date < new Date(today.setHours(0, 0, 0, 0));
  };

  const changeMonth = (direction) => {
    setCurrentMonth(new Date(year, month + direction, 1));
  };

  const handleDateSelect = (day) => {
    if (isPastDate(day)) return;
    setSelectedDate(new Date(year, month, day));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/meejqybj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          appointment_date: selectedDate.toDateString(),
          _subject: "New Appointment Request",
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Book an Appointment
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Choose a date and fill in your details to schedule an appointment.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* FORM */}
          <div className="p-8 lg:p-10">
            <h3 className="text-xl font-semibold mb-6">Appointment Details</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name*"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-900 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-900 outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-900 outline-none"
              />
              <select
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-900 outline-none"
              >
                <option value="" disabled>
                  Select a Service*
                </option>
                <option value="Customer Experience Consulting">
                  Customer Experience Consulting
                </option>
                <option value="Front Desk Management">Front Desk Management</option>
                <option value="Field Agent Support">Field Agent Support</option>
                <option value="Appointment Scheduling">Appointment Scheduling</option>
                <option value="Workforce Training">Workforce Training</option>
                <option value="Quality Assurance">Quality Assurance</option>
              </select>

              <input
                type="text"
                name="appointment_date"
                value={selectedDate.toDateString()}
                readOnly
                className="w-full border rounded-xl px-4 py-3 bg-gray-100 text-gray-700"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Additional notes"
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-900 outline-none resize-none"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-3 rounded-xl font-semibold text-white transition
                  ${status === "idle" ? "bg-blue-900 hover:bg-blue-700" : ""}
                  ${status === "sending" ? "bg-gray-500 cursor-not-allowed" : ""}
                  ${status === "success" ? "bg-blue-900" : ""}
                  ${status === "error" ? "bg-red-600" : ""}
                `}
              >
                {status === "idle" && "Book Appointment"}
                {status === "sending" && "Sending..."}
                {status === "success" && "Sent Successfully!"}
                {status === "error" && "Submission Failed!"}
              </button>
            </form>
          </div>

          {/* CALENDAR */}
          <div className="grid grid-cols-1 md:grid-cols-3 h-auto">
            <div className="bg-blue-900 text-white p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <p className="text-sm uppercase tracking-wide">
                  {selectedDate.toLocaleDateString("en-US", { weekday: "long" })}
                </p>
                <h1 className="text-6xl sm:text-7xl font-bold leading-none">
                  {selectedDate.getDate()}
                </h1>
                <p className="mt-2 text-lg">
                  {selectedDate.toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>

            <div className="col-span-2 p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => changeMonth(-1)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition"
                >
                  <ChevronLeft />
                </button>

                <h4 className="text-lg font-semibold">
                  {currentMonth.toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </h4>

                <button
                  onClick={() => changeMonth(1)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition"
                >
                  <ChevronRight />
                </button>
              </div>

              <div className="grid grid-cols-7 text-sm text-gray-500 mb-3">
                {days.map((day) => (
                  <div key={day} className="text-center font-medium">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {dates.map((day, index) => (
                  <button
                    key={index}
                    disabled={!day || isPastDate(day)}
                    onClick={() => handleDateSelect(day)}
                    className={`h-10 rounded-lg text-sm font-medium transition
                      ${isSelected(day) ? "bg-blue-900 text-white" : "hover:bg-blue-100"}
                      ${isPastDate(day) ? "text-gray-400 cursor-not-allowed" : ""}
                      ${!day && "invisible"}
                    `}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;
