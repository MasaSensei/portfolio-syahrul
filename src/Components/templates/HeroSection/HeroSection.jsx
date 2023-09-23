import React from "react";
import "./HeroSection.css";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import Atoms from "../../atoms";
const HeroSection = () => {
  return (
    <section className="w-full bg-cover HeroSection max-h-screen" id="hero">
      <div className=" flex items-center justify-center w-full h-full bg-gray-900 opacity-50 py-12">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center h-full pt-8">
            {/* Bagian Kiri */}
            <div className="flex flex-1 flex-col items-center z-10">
              <p className="text-lg text-center text-white mb-[22px] opacity-100">
                I'm Syahrul Mubarak
              </p>
              <h1 className="text-7xl font-poppins text-center  leading-[1.3] text-white md:text-tight lg:text-9xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
                CAREER <br /> PORTFOLIO
              </h1>
              <div className="flex flex-row gap-4 items-center justify-center">
                <div className="text-center">
                  <Atoms.Icon link="/">
                    <FaWhatsapp />
                  </Atoms.Icon>
                </div>
                <div className="text-center">
                  <Atoms.Icon link="/">
                    <FaLinkedin />
                  </Atoms.Icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
