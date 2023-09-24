import React from "react";
import Organism from "../../Components/organism";
import Templates from "../../Components/templates";

const ProjectPage = () => {
  const project = [
    {
      title: "A1465",
      description: `The 11 inch Macbook Air usually has RAM problems,
      His RAM chip often has problems`,
    },
    {
      title: "A1466",
      description: `For this series. The previous MacBook Air series, this unit was quite stubborn
      because specific problems rarely occur`,
      image: "./src/assets/images/A1466.jpg",
      alt: "A1466",
    },
    {
      title: "A1425",
      description:
        "A series that is very difficult to repair due to limitations and scarcity of components on the market,",
    },
    {
      title: "A1278",
      description: `Just like the A1466 unit, this unit is quite stubborn. However, that doesn't mean it can't be damaged.
      It can be damaged from no charging to total death.`,
      image: "./src/assets/images/A1278.jpg",
      alt: "A1278",
    },
    {
      title: "A1286",
      description: `This unit is quite problematic because it is weak in the GPU and VGA departments.`,
      image: "./src/assets/images/A1286.jpg",
      alt: "A1286",
    },
    {
      title: "A1502",
      description: `The MacBook units that I have experienced are quite unique because they are just different years of release
      in several components and their data. VGA.`,
      image: "./src/assets/images/A1502.jpg",
      alt: "A1502",
    },
  ];
  return (
    <main className="w-full">
      <Organism.Navbar />
      <section className="w-full bg-cover HeroSection max-h-screen" id="home">
        <div className=" flex items-center justify-center w-full h-full bg-gray-900 opacity-50 py-12">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center h-full pt-8">
              {/* Bagian Kiri */}
              <div className="flex flex-1 flex-col items-center z-10">
                <h1 className="text-7xl font-poppins text-center  leading-[1.3] text-white md:text-tight lg:text-9xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
                  MY GALLERY
                  <br /> PROJECT
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Templates.GalleryProjects project={project} />
    </main>
  );
};

export default ProjectPage;
