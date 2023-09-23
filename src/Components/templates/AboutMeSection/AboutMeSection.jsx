import React from "react";
import { Link } from "react-router-dom";
import Atoms from "../../atoms";

const AboutMeSection = () => {
  return (
    <section className="w-full max-h-screen h-screen bg-slate-900 flex items-center justify-center">
      <div className="container mx-auto text-center px-auto">
        <div className="mx-auto px-5">
          <div className="flex lg:flex-row flex-col items-center gap-5">
            <div className="flex-1 order-2 lg:order-1">
              <h4 className="text-5xl text-white text-center font-poppins">
                About Me
              </h4>
              <h5 className="text-2xl text-white text-center py-4">
                Hard worker, Technician in the Mac Device field
              </h5>
              <div className="mx-auto">
                <h3 className="text-white text-3xl text-center px-5"></h3>
                <p className="text-xl text-center py-5 text-white">
                  A hard worker with a thirst for exploration and a technician
                  with one year of experience in the field of Mac device repair.
                </p>
              </div>
              <div className="flex flex-row gap-5 items-center justify-center">
                <Atoms.Button link="/contact" className="bg-red-900">
                  Contact Me
                </Atoms.Button>
              </div>
            </div>
            <div className="flex-1 lg:order-2">
              <img
                src="https://i0.wp.com/kreativv.com/wp-content/uploads/2020/04/Sasuke-01.png?fit=800%2C500&ssl=1"
                alt=""
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
