import React from "react";
import "./ProjectSection.css";
import Atoms from "../../atoms";
import Organism from "../../organism";

const ProjectSection = () => {
  // Daftar slide Anda
  const slides = [
    {
      url: "./src/assets/images/A1286.jpg",
      title: "A1286",
      description:
        "This unit is quite problematic because it is weak in the GPU and VGA departments.",
    },
    {
      url: "./src/assets/images/A1389.jpg",
      title: "A1389",
      description:
        "The same unit as A1278, A1466 does not have special damage specifications.",
    },
    {
      url: "./src/assets/images/A1708.jpg",
      title: "A1708",
      description:
        "Flexgate or easily broken flexible LCD. This happens on some macbook units.",
    },
    // Tambahkan slide lainnya sesuai kebutuhan.
  ];

  return (
    <section
      className="w-full min-h-screen bg-gray-800 flex flex-col items-center justify-center overflow-hidden"
      id="project"
    >
      <div className="container mx-auto mt-5">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex-1">
            <div className="flex flex-row items-center justify-center pt-5 text-white">
              <h1 className="lg:text-7xl text-5xl font-poppins">MY PROJECT</h1>
            </div>
          </div>
          <div className="container mx-auto">
            {/* Gunakan komponen Slider di sini */}
            <Organism.ProjectSlider slides={slides} />
          </div>
          <div className="flex-1 mt-0 mb-5">
            <Atoms.Button link="/project">Read More</Atoms.Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
