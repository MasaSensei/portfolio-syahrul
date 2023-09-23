import React from "react";
import "./ProjectSection.css";
import Atoms from "../../atoms";
import Organism from "../../organism";

const ProjectSection = () => {
  // Daftar slide Anda
  const slides = [
    {
      url: "https://flowbite.com/docs/images/blog/image-1.jpg",
      title: "Testing",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      url: "https://flowbite.com/docs/images/blog/image-1.jpg",
      title: "Testing 2",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      url: "https://flowbite.com/docs/images/blog/image-1.jpg",
      title: "Testing 2",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    // Tambahkan slide lainnya sesuai kebutuhan.
  ];

  return (
    <section className="w-full min-h-screen bg-gray-800 flex flex-col items-center justify-center overflow-hidden">
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
            <Atoms.Button link="/contact">Read More</Atoms.Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
