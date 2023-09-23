import React from "react";
import Organism from "../../Components/organism";
import Templates from "../../Components/templates";

const MainPage = () => {
  return (
    <div className="w-full">
      <Organism.Navbar />
      <Templates.HeroSection />
      <Templates.AboutMeSection />
      <Templates.ProjectSection />
      <Templates.ContactSection />
    </div>
  );
};

export default MainPage;
