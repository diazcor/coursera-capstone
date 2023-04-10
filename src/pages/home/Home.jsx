import React from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import SpecialSection from "./SpecialSection/SpecialSection";
import TestimonialsSection from "./TestimonialsSection/TestimonialsSection";
import AboutSection from "./AboutSection/AboutSection";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <main>
      <Navbar />

      <HeroSection />
      <SpecialSection />
      <TestimonialsSection />
      <AboutSection />

      <Footer />
    </main>
  );
};

export default Home;
