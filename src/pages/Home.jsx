import React from "react";
import HeroSection from "../components/home/HeroSection";
import InfoSection from "../components/home/InfoSection";
import ServicesGrid from "../components/home/ServicesGrid";
import HomeTestimonialsFaqs from "../components/home/HomeTestimonialsFaqs";
import HomeContactForm from "../components/home/HomeContactForm";

const Home = () => (
  <>
    <HeroSection />
    <InfoSection/>
    <ServicesGrid/>
    <HomeTestimonialsFaqs/>
    <HomeContactForm/>
  </>
);

export default Home;
