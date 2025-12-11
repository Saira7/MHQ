import React from "react";
import HeroSection from "../components/about/HeroSection";
import CompanyStory from "../components/about/CompanyStory";
import CoreValues from "../components/about/CoreValues";
import CTASection from "../components/services/CTASection";
import HowWeDoIt from "../components/about/HowWeDoIt"

const AboutPage = () => {
  return (
    <div className="bg-gray-50">
      <HeroSection />
      <CompanyStory />
      <CoreValues />
      <HowWeDoIt/>
      <CTASection />
    </div>
  );
};

export default AboutPage;
