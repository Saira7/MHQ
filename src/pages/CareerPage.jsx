import React from "react";
import CareerHero from "../components/career/CareerHero";
import CareerIntro from "../components/career/CareerIntro";
import JobCards from "../components/career/JobCards";
import JoinOurTeam from "../components/career/JoinOurTeam";

const CareerPage = () => {
  return (
    <div className="bg-gray-50">
      <CareerHero />
      <CareerIntro />
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-8">
        <JobCards />
        <JoinOurTeam />
      </section>
    </div>
  );
};

export default CareerPage;
