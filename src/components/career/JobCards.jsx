import { motion } from "framer-motion";

const jobs = [
  { type: "Full Time / Part Time", title: "Marketing Advisor" },
  { type: "Full Time", title: "Supervisor" },
  { type: "Part Time", title: "Field Agent" },
  { type: "Full Time / Part Time", title: "Receptionist" },
];

const JobCards = () => {
  return (
    <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
      {jobs.map((job, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover="hover"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative cursor-pointer"
        >
          {/* Back shadow card */}
          <motion.div
            variants={{
              hover: {
                backgroundColor: "#1e40af", // blue-800
                x: 8,
                y: 8,
              },
            }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="absolute inset-0 translate-x-4 translate-y-4 bg-blue-950/90 rounded-3xl z-0"
          />

          {/* Front glass card */}
          <motion.div
            variants={{
              hover: {
                y: -6,
                scale: 1.03,
              },
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative z-10 rounded-3xl p-8 border border-white/40 
                       bg-gradient-to-br from-white/90 via-blue-50/70 to-blue-50/50
                       hover:from-blue-100/90 hover:via-blue-200/70 hover:to-blue-100/70
                       backdrop-blur-xl shadow-xl hover:shadow-2xl
                       transition-colors duration-500"
          >
            {/* Job Type */}
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-900 mb-3">
              {job.type}
            </span>

            {/* Job Title */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {job.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Join our growing team and work in a dynamic, professional
              environment with growth opportunities.
            </p>

            {/* Action */}
            <button className="px-6 py-2 bg-blue-900 text-white rounded-full text-sm font-semibold 
                               hover:bg-blue-700 hover:scale-105 transition-all duration-300">
              APPLY NOW
            </button>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default JobCards;
