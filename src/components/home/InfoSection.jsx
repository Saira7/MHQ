import React from "react";
import waveLines from "../../assets/wave-bg-infosection.jpg"; // add a soft wave-lines bg like reference

const IntroSection = () => {
  return (
    <section className="relative w-full -mt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-white rounded-xl shadow-xl p-10 md:p-14 overflow-hidden">

          {/* Subtle wave background inside the card */}
          <img
            src={waveLines}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
          />

          <div className="relative grid md:grid-cols-2 gap-12 ">
            {/* LEFT */}
            <div className="relative top-10">
              <h4 className="text-blue-900 font-bold text-2xl tracking-wide mb-3">
                WELCOME TO MHQUK CONSULTANTS
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight ">
                Innovative, Reliable, <br /> Empowering Growth
              </h2>
            </div>

            {/* RIGHT */}
            <div className="text-gray-900 font-semibold space-y-6 text-lg text-justify">
              <p>
                Transform your business operations with cutting-edge consultancy 
                designed for your growth. From business formation to financial services, 
                we provide seamless, efficient, and reliable solutions that help your 
                business thrive in a competitive marketplace.
              </p>

              <p>
                Unlock your business potential with tailored solutions built for long-term 
                success. Our expert team ensures smooth processes, compliance, and strategic 
                support — empowering your business to grow and excel.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntroSection;
